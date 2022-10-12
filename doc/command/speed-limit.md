# 速度限制模式
## 开启速度限制模式，并设置最大速度
### `POST /api/1/vehicles/{id}/command/speed_limit_set_limit`
### Parameters
参数|例子|描述
:-|:-|:-
limit_mph|65|最大速度，英里50-90(80-145km/h)
### Response
```json
{
  "reason": "",
  "result": true
}
```

## 激活速度限制模式，速度为预设的速度
### `POST /api/1/vehicles/{id}/command/speed_limit_activate`
### Parameters
参数|例子|描述
:-|:-|:-
pin|1234|关闭速度限制模式密码，4位数字
### Response
```json
{
  "reason": "",
  "result": true
}
```

## 关闭速度限制模式
### `POST /api/1/vehicles/{id}/command/speed_limit_deactivate`
### Parameters
参数|例子|描述
:-|:-|:-
pin|1234|关闭速度限制模式密码，4位数字
### Response
```json
{
  "reason": "",
  "result": true
}
```

## 清除速度限制模式PIN码
### `POST /api/1/vehicles/{id}/command/speed_limit_clear_pin`
### Parameters
参数|例子|描述
:-|:-|:-
pin|1234|关闭速度限制模式密码，4位数字
### Response
```json
{
  "reason": "",
  "result": true
}
```