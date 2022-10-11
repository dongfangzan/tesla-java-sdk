# 认证 Authentication
特斯拉基于OAuth2.0搭建了一个认证中心用于单点登录，在认证通过后会返回一个access token和一个refresh token。access token的有效期为8小时，过期后可以使用refresh token去刷新access token的有效期。原则上来说，只要不修改密码，就可以一直使用refresh token来获取特斯拉的访问权限。

::: tip
首先大家需要理解OAuth2.0协议到底是干什么的，这里我就不多科普，感兴趣的同学可以看一下阮一峰的博客，详细解释了[OAuth协议](https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html)，而且特斯拉就使用了文中的第一种，授权码方式。
:::

::: warning
需要注意的是，特斯拉的SSO有WAF，所以如果你反复的一直去刷特斯拉的接口，就会跳出一个风控挑战的页面，来让你证明自己不是机器人。所以尽量不要高频率的刷新特斯拉的认证接口，以防给自己带来不必要的麻烦。
:::


## 登录
### 第一步：访问登录页
#### GET https://auth.tesla.cn/oauth2/v3/authorize
为了获取特斯拉的access token，我们需要一个入口登录我们的特斯拉账号。为了保障信息安全，我们应该使用特斯拉的页面来获取token，防止用户名密码的泄露。那么首先我们就需要去请求并在浏览器（pc端、移动端均可）渲染一个特斯拉登录页面。
#### 例子，你可以直接点击<a href="https://auth.tesla.cn/oauth2/v3/authorize?client_id=ownerapi&redirect_uri=https://auth.tesla.com/void/callback&response_type=code&scope=openid%20email%20offline_access&state=v9ICSc2Ld6g2m5rdDwwH&code_challenge=NTA3NzE5NzFlZDljNWExODMzMjFlYTJmNmRjNDNlMzMzMzBhYmM4NTgyZDhjNjAzZTRlOGIxOWUxOTc2MGYwYQ&code_challenge_method=S256" target="_blank">链接</a>，就会看到下面的登录页面
<img :src="$withBase('/images/tesla-sso.png')" alt="cover">

你也可以将下面的地址复制到浏览器中，并尝试访问，两种方式的效果是一样的
```
如果是海外的地址可以把auth.tesla.cn换成auth.tesla.com
https://auth.tesla.cn/oauth2/v3/authorize?client_id=ownerapi&redirect_uri=https://auth.tesla.com/void/callback&response_type=code&scope=openid%20email%20offline_access&state=v9ICSc2Ld6g2m5rdDwwH&code_challenge=NTA3NzE5NzFlZDljNWExODMzMjFlYTJmNmRjNDNlMzMzMzBhYmM4NTgyZDhjNjAzZTRlOGIxOWUxOTc2MGYwYQ&code_challenge_method=S256
```


下面我们逐一解释地址中涉及到的参数

|参数|类型|例子|描述|
|:-|:-|:-|:-|
|client_id|String,必填|ownerapi|OAuth Client Id，通常直接填写"ownerapi"|
|code_challenge|String,必填|通过下述代码生成|我也说不清干嘛的|
|code_challenge_method|String,必填|S256|生成code challenge的方法，这里直接写"S256"|
|redirect_uri|String,必填|`https://auth.tesla.com/void/callback` | 这里是一个固定地址|
|response_type|String,必填|code|oauth的响应类型，这里固定写"code"|
|scope|String,必填|`openid email offline_access` |这里也是固定值|
|state|String,必填|123|你可以自己随机一个字符串，在认证完成后特斯拉会返回这个字符串供你进行校验|
|login_hint|String,非必填|elon_musk@tesla.com|用来认证的特斯拉账号|

其中关键的参数为`code verifier`和`code challenge`。`code verifier`是一个长度为86的随机字符串，`code challenge`是对`code verifier`用SHA256进行哈希后再用url safe base64进行编码后生成的字符串，Java代码如下
> 注意，这里的base64是url safe base64，不是普通的base64，如果你用错了，那就会出点小问题

```java
/**
 * 根据code verifier获取code challenge，本方法使用commons-codec包
 *
 * @param codeVerifier code verifier
 * @return code challenge
 */
public static String getCodeChallenge(String codeVerifier) {
    if (StringUtils.isBlank(codeVerifier)) {
        throw new IllegalArgumentException("code verifier 不能为空");
    }

    if (CODE_VERIFIER_LENGTH != codeVerifier.length()) {
        throw new IllegalArgumentException("code verifier的长度应为86");
    }

    MessageDigest messageDigest;
    String codeChallenge = "";
    try {
        messageDigest = MessageDigest.getInstance("SHA-256");
        byte[] hash = messageDigest.digest(codeVerifier.getBytes(StandardCharsets.UTF_8));
        String sha256 = Hex.encodeHexString(hash);
        codeChallenge = Base64.encodeBase64URLSafeString(sha256.getBytes(StandardCharsets.UTF_8));
    } catch (NoSuchAlgorithmException e) {
        log.error(e.getMessage());
    }
    return codeChallenge;
}
```
这里我也给一对`code verifier`和`code challenge`的例子，如果你想用其他语言来实现的话，可以拿这个验证一下你的代码写对了没有。
```
code verifier:
aklTa0pFQmludXh5dHJ2aE9wZW5HQ2ZyYU1uS3NsamVNVEdJWkNTYkZCWklkdU5rbXdYbGdDcmdUVWlxREF4Sg

code challenge:
NTA3NzE5NzFlZDljNWExODMzMjFlYTJmNmRjNDNlMzMzMzBhYmM4NTgyZDhjNjAzZTRlOGIxOWUxOTc2MGYwYQ
```
在渲染的特斯拉登录页面中可以看到一个form表单，里面包含了一个隐藏的input，来防御CSRF。同时这里还包含了`_csrf`,`_phase`,`_process`,`transaction_id`,`cancel`标签，这些标签中的值可能会根据特斯拉服务端进行变化，并在认证过程中需要带在POST请求的请求体中。这里其实是爬取特斯拉页面中的各类input标签，然后将上述四个标签的值和你的账号密码通过POST请求的Form Data向认证服务器发起请求进行认证。
<img :src="$withBase('/images/login-form.png')" alt="cover">

当然其实可以不必关注这些细节，选择直接在特斯拉提供的页面中输入你的特斯拉账号密码，并进行登录即可。

### 第二步，获取认证code
在页面完成特斯拉输入账号密码，并完成认证登录后。上述页面会重定向到一个地址，并带上oauth返回的认证code，我们就可以用这个code来换取token了。
这个地址类似：
```
https://auth.tesla.com/void/callback?code=c7dc7f8196d001632558d6632558d6243632558d6b6d60f82c0632558d67&state=v9ICSc2Ld6g2m5rdDwwH&issuer=https%3A%2F%2Fauth.tesla.cn%2Foauth2%2Fv3
```
<img :src="$withBase('/images/auth-code.png')" alt="cover">

#### 参数说明
参数|说明|例子
:-|:-|:-
code|认证通过返回的code，你可以使用这个code来换取access token|`c7dc7f8196d001632558d663255..` 
state|构建登录页面时随机的字符串，可以用来验证响应是否被篡改/或者是否是本次请求|`v9ICSc2Ld6g2m5rdDwwH` 
issuer|这个参数对我们来说不重要|`https://auth.tesla.cn/oauth2/v3` 

### 第三步，使用code来交换access token
#### POST `https://auth.tesla.cn/oauth2/v3/token`

使用上一步获得到的code，调用本接口，就可以获取到最终的access token和refresh token了

#### 参数说明
|参数|类型|例子|描述|
|:-|:-|:-|:-|
|client_id|String,必填|`ownerapi`|OAuth Client Id，通常直接填写"ownerapi"|
|grant_type|String,必填|`authorization_code` |授权类型，这里直接写`authorization_code` |
|code|String,必填|`c7dc7f8196d001632558d663255..`|在上一步骤中获取到的code|
|redirect_uri|String,必填|`https://auth.tesla.com/void/callback` | 这里是一个固定地址|
|code_verifier|String,必填|`aklTa0pFQmludXh5dHJ2`|在第一步中你构建登录请求时创建的随机字符串|

#### request body
```json
{
  "grant_type": "authorization_code",
  "client_id": "ownerapi",
  "code": "4ee34c0f5d98339781bd224394860b093919b8fbde09f759a2ef832900a6",
  "code_verifier": "aklTa0pFQmludXh5dHJ2aE9wZW5HQ2ZyYU1uS3NsamVNVEdJWkNTYkZCWklkdU5rbXdYbGdDcmdUVWlxREF4Sg",
  "redirect_uri": "https://auth.tesla.com/void/callback"
}
```

#### response body
```json
{
  "access_token": "eyJacess",
  "refresh_token": "eyJrefresh",
  "id_token": "eyJid",
  "expires_in": 28800,
  "state": "v9ICSc2Ld6g2m5rdDwwH",
  "token_type": "Bearer"
}
```

## 构建请求
有了access token之后，可能不少有经验的同学就会发现这个token十分眼熟，没错，这就是一个普通的JwtToken，如果你有过类似使用该token的经验，那么很快就可以猜出来如何使用这个token了。

很简单，就是在后续每一个需要认证后才能使用的接口（如查询车辆信息）请求的header中加入
```
Authorization: Bearer {access_token}
```

## 刷新access token
通常来说access token都是有过期时间，但如果access token过期了，我们调用某些接口特斯拉就会返回
```json
{
  "error": "invalid bearer token"
}
```
这时如果我们想继续获取访问权限，就需要获取新的access token，我们可以用本接口来刷新access token。

::: danger
原则上来说，如果我们保留着refresh token，就可以一直通过刷新access token来获取特斯拉的访问权限。
换句话说，市面上有不少第三方工具，可能已经获取了你的refresh token，那么如果他想搞你的车，那么你懂的:ghost::ghost::ghost:
:::

#### POST https://auth.tesla.cn/oauth2/v3/token

#### 参数说明
|参数|类型|例子|描述|
|:-|:-|:-|:-|
|client_id|String,必填|`ownerapi`|OAuth Client Id，通常直接填写`ownerapi`|
|grant_type|String,必填|`refresh_token` |授权类型，这里直接写`refresh_token` |
|refresh_token|String,必填|`eyJrefresh`|在上一步骤中获取到的refresh token|
|scope|String,必填|`openid email offline_access` | 固定值|

#### request body
```json
{
  "grant_type": "refresh_token",
  "client_id": "ownerapi",
  "refresh_token": "eyJrefresh",
  "scope": "openid email offline_access"
}
```
#### response body
```json
{
  "access_token": "eyJaccess",
  "refresh_token": "eyJrefresh",
  "id_token": "id",
  "expires_in": 300,
  "token_type": "Bearer"
}
```
至此，我们就完成关于特斯拉认证接口的全部内容，后续的所有操作，都是基于获取该token之后的操作。
