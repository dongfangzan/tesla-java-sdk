# 代客模式
激活代客模式后，特斯拉将会进行下列限制：

- 会将车辆的最高时速限制在113公里每小时
- 最大加速和功率首先
- 前备箱和手套箱锁定
- 导航系统中不再提供住宅和公司的位置
- 语音命令禁用
- Autopilot自动辅助驾驶便利功能禁用
- 允许手机访问设置禁用
- HomeLink无法访问
- 驾驶员设定无法访问
- 触摸屏不显示可以访问的钥匙列表
- Wi-Fi和蓝牙禁用，处于代客模式时，无法配对新的蓝牙设备，也无法查看或删除已配对的设备。

::: warning 注意
打开和关闭代客模式时，密码都不是必填项。但是如果你清除了PIN码，然后又开启了代客模式，那么你只能在车机的屏幕上关闭代客模式了。
:::

## 激活/关闭代客模式
### `POST /api/1/vehicles/{id}/command/set_valet_mode`
### Parameters
参数|例子|描述
:-|:-|:-
on|true|true-激活，false-关闭
password|1234|解除代客模式的PIN码
### Response
```json
{
  "reason": "",
  "result": true
}
```

## 清除代客模式PIN码
### `POST /api/1/vehicles/{id}/command/reset_valet_pin`
### Response
```json
{
  "reason": "",
  "result": true
}
```