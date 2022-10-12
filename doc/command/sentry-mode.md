# 哨兵模式
## 打开/关闭哨兵模式
### `POST /api/1/vehicles/{id}/command/set_sentry_mode`
### Request Body
```json
{
  "on": "true"
}
```
### Response
```json
{
  "reason": "",
  "result": true
}
```