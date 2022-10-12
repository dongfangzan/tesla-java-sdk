# 温度控制系统（HVAC）
## 打开温度控制（打开空调）
### `POST /api/1/vehicles/{id}/command/auto_conditioning_start`
会根据预设的温度打开空调

## 关闭温度控制（关闭空调）
### `POST /api/1/vehicles/{id}/command/auto_conditioning_stop`

## 设置温度
### `POST /api/1/vehicles/{id}/command/set_temps`
::: tip 说明
1. 这里虽然有两个参数，但是只有driver_temp实际上起作用
2. 无论车里GUI显示怎么设置，温度参数的单位都是摄氏度而非华氏度
:::
### Parameters
参数|例子|描述
:-|:-|:-
driver_temp|23.4|驾驶员区域的期望温度，单位是摄氏度
passenger_temp|23.4|乘客区域的期望温度，单位是摄氏度

## 空调开到最大
### `POST /api/1/vehicles/{id}/command/set_preconditioning_max`
### Parameters
参数|例子|描述
:-|:-|:-
on|true|`true`-打开，`false`-关闭

## 座椅加热
### `POST /api/1/vehicles/{id}/command/remote_seat_heater_request`
### Parameters
参数|例子|描述
:-|:-|:-
heater|0|需要打开的座位号
level|3|座椅加热档位

座位号说明
座位号|座位
:-|:-
0|左前
1|右前
2|左后
4|后中
5|右后

## 座椅冷却
### `POST /api/1/vehicles/{id}/command/remote_seat_cooler_request`
仅支持Model S和Model X
### Parameters
参数|例子|描述
:-|:-|:-
seat_position|0|需要打开的座位号
seat_cooler_level|3|座椅冷却档位

座位号说明
座位号|座位
:-|:-
0|左前
1|右前
2|左后
4|后中
5|右后

## 生化武器防御模式
### `POST /api/1/vehicles/{id}/command/set_bioweapon_mode`
### Parameters
参数|例子|描述
:-|:-|:-
on|true|开启

## 开启温度控制保持模式
### Request
这里的温度控制保持模式是英文直译，其实是打开空调设置为指定模式，模式分别为
数字|模式
:-|:-
0|关闭
1|默认
2|爱犬模式
3|露营模式
### Example
```json
{
  "climate_keeper_mode": 0
}
```

## 自动座椅温度控制
### `POST /api/1/vehicles/{vehicle_id}/command/remote_auto_seat_climate_request`
### Parameters
参数|例子|描述
:-|:-|:-
auto_seat_position|0|需要打开的座位号
auto_climate_on|true|开启/关闭

座位号说明
座位号|座位
:-|:-
0|左前
1|右前
2|左后
4|后中
5|右后