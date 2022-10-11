# 唤醒
## 唤醒车辆
### `POST /api/1/vehicles/{id}/wake_up`

特斯拉会在车辆锁上后的一段时间内进入睡眠状态来节省电量，如果车辆处于睡眠状态的时候，是无法从车机中读取任何信息或执行指令的。

调用本接口会立即返回一个响应，但车辆并不是马上就进入在线状态，而是需要等待车辆真正完成通电唤醒后才会真正的唤醒完成，如果车辆所处的位置信号不好，这个唤醒的过程可能会很慢。

你可以隔一段时间调用一次这个唤醒接口，直到接口返回了`online`状态后，再执行其他指令。

::: warning 注意
经常调用这个接口，会让特斯拉一直处在在线状态，增加耗电量，这也是为什么很多人建议大家不要频繁打开tesla app，增加无谓耗电量
:::

### Response
```json
{
  "response": {
    "id": 12345678901234567,
    "user_id": 12345,
    "vehicle_id": 1234567890,
    "vin": "5YJSA11111111111",
    "display_name": "Nikola 2.0",
    "option_codes": "MDLS,RENA,AF02,APF1,APH2,APPB,AU01,BC0R,BP00,BR00,BS00,CDM0,CH05,PBCW,CW00,DCF0,DRLH,DSH7,DV4W,FG02,FR04,HP00,IDBA,IX01,LP01,ME02,MI01,PF01,PI01,PK00,PS01,PX00,PX4D,QTVB,RFP2,SC01,SP00,SR01,SU01,TM00,TP03,TR00,UTAB,WTAS,X001,X003,X007,X011,X013,X021,X024,X027,X028,X031,X037,X040,X044,YFFC,COUS",
    "color": null,
    "tokens": ["abcdef1234567890", "1234567890abcdef"],
    "state": "online",
    "in_service": false,
    "id_s": "12345678901234567",
    "calendar_enabled": true,
    "api_version": 7,
    "backseat_token": null,
    "backseat_token_updated_at": null
  }
}
```