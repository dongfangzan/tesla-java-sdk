# 前备箱/后备箱
## 打开/关闭前/后备箱
::: tip 电动前/后备箱
只有支持电动前备箱（Model S/X）和电动后备箱（部分早期的Model 3不支持）的车才可以通过该接口关闭，否则只支持打开
:::
### `POST /api/1/vehicles/{id}/command/actuate_trunk`
### Parameters
参数|例子|描述
:-|:-|:-
which_trunk|rear|`front`-前备箱，`rear`-后备箱
