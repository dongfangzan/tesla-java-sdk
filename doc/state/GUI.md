# GUI设置信息
## 车辆GUI设置信息
主要是单位格式（公里/英里等）
### `GET /api/1/vehicles/{id}/data_request/gui_settings`
### Response
```json
{
  "response": {
    "gui_24_hour_time": false,
    "gui_charge_rate_units": "mi/hr",
    "gui_distance_units": "mi/hr",
    "gui_range_display": "Rated",
    "gui_temperature_units": "F",
    "show_range_units": true,
    "timestamp": 1543187561462
  }
}
```