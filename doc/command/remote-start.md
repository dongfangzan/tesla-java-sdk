# 远程启动
### `POST /api/1/vehicles/{id}/command/remote_start_drive`
开启无钥匙驾驶功能，调用该接口后，车辆有2分钟的窗口期可以在没有钥匙的情况下驾驶车辆
### Response
```json
{
  "reason": "",
  "result": true
}
```