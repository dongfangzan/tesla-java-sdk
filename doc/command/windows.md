# 车窗

### `POST /api/1/vehicles/{id}/command/window_control`

控制车窗通风或关闭

参数中的经纬度参数用法：
1. 通风指令：经纬度均可为0
2. 关闭指令：需要传入的经纬度必须在车辆附近才可以成功操作

### Parameters
参数|例子|描述
:-|:-|:-
command|`vent`|`vent`-通风，`close`-关闭
lat|0|纬度
lon|0|经度
### Response
```json
{
  "reason": "",
  "result": true
}
```
