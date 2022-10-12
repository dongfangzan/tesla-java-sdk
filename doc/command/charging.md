# 充电
## 打开充电口
### `POST /api/1/vehicles/{id}/command/charge_port_door_open`

## 关闭充电口
### `POST /api/1/vehicles/{id}/command/charge_port_door_close`

## 开始充电
### `POST /api/1/vehicles/{id}/command/charge_start`
如果车辆已经插入充电枪，但尚未开始充电，调用此接口会立即开始充电

## 停止充电
### `POST /api/1/vehicles/{id}/command/charge_stop`

## 设置充电限额标准
### `POST /api/1/vehicles/{id}/command/charge_standard`
将充电限制到标准或90%

## 设置充电限额解除
### `POST /api/1/vehicles/{id}/command/charge_max_range`
解除充电限制，将会充满

## 设置充电限额
### `POST /api/1/vehicles/{id}/command/set_charge_limit`
### Parameters
参数|例子|描述
:-|:-|:-
percent|75|指定的充电限额

## 设置充电过程中的最大电流
### `POST /api/1/vehicles/{id}/command/set_charging_amps`
### Parameters
参数|例子|描述
:-|:-|:-
charging_amps|32|充电过程中的最大电流

## 设置预约充电
### `POST /api/1/vehicles/{id}/command/set_scheduled_charging`
### Parameters
参数|例子|描述
:-|:-|:-
enable|`true`|`true`-开启，`false`-关闭预约充电
time|1410|当地时间，24小时制，mmss

## 设置预约出发时间
车会在预约出发时间前完成充电
### Parameters
参数|例子|描述
:-|:-|:-
enable|`true`|`true`-开启，`false`-关闭预约充电
departure_time|1410|当地时间，24小时制，mmss
preconditioning_enabled|true|开启预设温度包括温度控制和电池预热
preconditioning_weekdays_only|true|设置预设温度是否仅为工作日
off_peak_charging_enabled|true|开启非高峰时段充电
off_peak_charging_weekdays_only|true|是否仅在工作日开启非高峰时段充电
end_off_peak_time|450|非高峰时段结束时间
