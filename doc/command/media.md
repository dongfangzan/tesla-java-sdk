# 媒体
## 播放/暂停
### `POST /api/1/vehicles/{id}/command/media_toggle_playback`
如果是在广播界面，触发该功能则是静音/接触静音

## 下一曲
### `POST /api/1/vehicles/{id}/command/media_next_track`

## 上一曲
### `POST /api/1/vehicles/{id}/command/media_prev_track`

## 跳转到车机媒体里收藏中的下一首
### `POST /api/1/vehicles/{id}/command/media_next_fav`

## 跳转到车机媒体里收藏中的上一首
### `POST /api/1/vehicles/{id}/command/media_prev_fav`

## 声音调大
### `POST /api/1/vehicles/{id}/command/media_volume_up`

## 声音调小
### `POST /api/1/vehicles/{id}/command/media_volume_down`