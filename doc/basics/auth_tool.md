# 认证工具
::: tip
在上一篇文章中，我详细解释了特斯拉的认证流程，在这有一些tesla的一键认证工具，让大家可以很直观的感受，理解代码并调试自己的程序
:::
## python 一键生成access token和refresh token
在本项目中的python文件夹下有一个<a href="https://raw.githubusercontent.com/dongfangzan/tesla-java-sdk/master/python/tesla.py" target="_blank">tesla.py</a>文件，你可以尝试输入下面的命令来一次性获取access token和refresh token
```pthon
python3 tesla.py -e elon_musk@tesla.com -p elon_password -f token.txt
```
#### 输出结果如下
```
access_token:
eyJaccessToken
refresh_token:
eyJrefreshToken
```