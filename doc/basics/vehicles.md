# 车辆 Vehicles
> 账号中的车辆信息
---
在前面的文章中我们详细解释了如何登录并获取access token，在拥有了access token之后，我们就可以调用特斯拉其他的相关接口。

在本篇文章中我们主要来说明一下跟车辆信息有关的相关内容

::: tip
`vehicle_id`和`id`
这两个都是车辆id的概念，但用途不太一样，但非常容易搞混。

`id`主要用于owner-api相关接口的使用，如车辆的唤醒、开启空调等等。

`vehicle_id`是车辆在不同接口中使用的标识，如流接口。
:::
## 获取车辆列表
### `GET /api/1/vehicles` 
获取登录账号中你拥有的车辆信息
### Request parameters

### Response
::: details 点击查看详情
```json
{
  "response": [
    {
      "id": 12345678901234567,
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
  ],
  "count": 1
}
```
:::

## 根据id获取车辆信息
### `GET /api/1/vehicles/{id}`

### URL Parameters
参数|例子|描述
:-|:-|:-
`id`|`12345678901234567`|`id`，不是`vehicle_id`

### Response
::: details 点击查看详情
```json
{
  "response": {
    "id": 12345678901234567,
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
:::