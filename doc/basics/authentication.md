# 认证 Authentication
有别于App，特斯拉使用了一个单独的SSO单点登录认证，协议为OAuth2.0，在认证通过后会返回一个access token和一个refresh token。access token的有效期为8小时，过期后可以使用refresh token去刷新access token的有效期。原则上来说，只要不修改密码，就可以一直使用refresh token来获取特斯拉的访问权限。

> 需要注意的是，特斯拉的SSO有WAF，所以如果你反复的一直去刷特斯拉的接口，就会跳出一个风控挑战的页面，来让你证明自己不是机器人。所以尽量不要高频率的刷新特斯拉的认证接口，以防给自己带来不必要的麻烦。

## 登录
### 第一步：访问登录页

