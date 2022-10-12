# 分享
将一个地址发送到车机导航或在剧场中播放视频

### `POST /api/1/vehicles/{id}/command/share`
### Parameters
参数|例子|描述
:-|:-|:-
type|`share_ext_content_raw`|固定值
locale|`zh-CN`|[ISO 639-1标准语言编码](https://www.andiamo.co.uk/resources/iso-language-codes/)
timestamp_ms|`1539465730`|unix时间戳，单位毫秒
value[android.intent.extra.TEXT]|`123 Main St, City, ST 12345`|地址或者视频URL
### 例子
```json
{
  "type": "share_ext_content_raw",
  "value": {
    "android.intent.extra.TEXT": "123 Main St, City, ST 12345\n\nhttps://goo.gl/maps/X"
  },
  "locale": "en-US",
  "timestamp_ms": "1539465730"
}
```
### Response
```json
{
  "reason": "",
  "result": true
}
```