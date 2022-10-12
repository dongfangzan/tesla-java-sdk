# 车门
## 解锁车门
::: tip 注意
如果你的车是Model S或Model X，调用该接口还会打开车门把手
:::
### `POST /api/1/vehicles/{id}/command/door_unlock`
### Response
```json
{
  "reason": "",
  "result": true
}
```
## 锁门
::: tip 注意
如果你的车是Model S或Model X，调用该接口还会收起车门把手
:::
### `POST /api/1/vehicles/{id}/command/door_lock`
### Response
```json
{
  "reason": "",
  "result": true
}