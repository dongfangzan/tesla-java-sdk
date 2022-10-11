# 车辆状态 Vehicle State
## 获取车辆真实状态
### `GET /api/1/vehicles/{id}/data_request/vehicle_state`
这个接口会返回车辆的真是状态信息，比如门是不是开着，前后备箱开启以及开启的比例

`center_display_state`表示目前车机屏幕的显示状态，目前已知的`center_display_state`主要有
center_display_state|描述
:-|:-
0|离线
2|在线，待机或露营模式
3|在线，充电界面
4|在线
5|在线，大屏充电界面
6|在线，准备解锁
7|哨兵模式
8|爱犬模式
9|媒体界面

下列已知的缩写含义为
缩写|描述
:-|:-
df|driver front（含义不明）
dr|driver rear（含义不明）
pf|passenger front（含义不明）
pr|passenger rear（含义不明）
ft|front trunk（前备箱）
rt|rear trunk（后备箱）

### Response
::: details 点击查看详情
```json
{
  "response": {
    "api_version": 10,
    "autopark_state_v2": "standby",
    "autopark_style": "standard",
    "calendar_supported": true,
    "car_version": "2020.36.16 3e9e4e8dd287",
    "center_display_state": 0,
    "df": 0,
    "dr": 0,
    "ft": 0,
    "homelink_device_count": 2,
    "homelink_nearby": true,
    "is_user_present": false,
    "last_autopark_error": "no_error",
    "locked": false,
    "media_state": { "remote_control_enabled": true },
    "notifications_supported": true,
    "odometer": 57509.856033,
    "parsed_calendar_supported": true,
    "pf": 0,
    "pr": 0,
    "remote_start": false,
    "remote_start_enabled": true,
    "remote_start_supported": true,
    "rt": 0,
    "sentry_mode": false,
    "sentry_mode_available": true,
    "smart_summon_available": true,
    "software_update": {
      "download_perc": 0,
      "expected_duration_sec": 2700,
      "install_perc": 1,
      "status": "",
      "version": ""
    },
    "speed_limit_mode": {
      "active": false,
      "current_limit_mph": 50.0,
      "max_limit_mph": 90,
      "min_limit_mph": 50,
      "pin_code_set": true
    },
    "summon_standby_mode_enabled": false,
    "sun_roof_percent_open": 0,
    "sun_roof_state": "closed",
    "timestamp": 1604977470379,
    "tpms_pressure_fl": 0.0,
    "tpms_pressure_fr": 0.0,
    "tpms_pressure_rl": 0.0,
    "tpms_pressure_rr": 0.0,
    "valet_mode": false,
    "valet_pin_needed": true,
    "vehicle_name": "Nikola 2.0"
  }
}
```
:::