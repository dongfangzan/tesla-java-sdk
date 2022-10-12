# 软件更新
## 预约软件更新
### `POST /api/1/vehicles/{id}/command/schedule_software_update`
当一个新的软件更新已经可以安装时，预约安装

::: warning 注意
建议各位老铁在安装时不要坐在车里，别问我为啥这么建议，你坐一次就知道了
:::
### Parameters
参数|例子|描述
:-|:-|:-
offset_sec|`7200`|设置还有offset_sec秒开始安装，如果设置为0则立即开始安装

## 取消软件更新
### `POST /api/1/vehicles/{id}/command/cancel_software_update`
在调度期间可以取消，如果开始安装后则无法取消