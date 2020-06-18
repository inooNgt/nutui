# Badge 徽标

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

## 基本用法

```html
<nut-badge
    :isDot="true"
    class="item"
>
    拜访提醒
</nut-badge>

<nut-badge
    :isDot="true"
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

```

## 数字角标

```html
<nut-badge
    :value="9"
    :max="99"
    class="item"
>
    拜访提醒
</nut-badge>

<nut-badge
    :value="99"
    :max="99"
    class="item"
>
    拜访提醒
</nut-badge>

<nut-badge
    :value="200"
    :max="99"
    class="item"
>
    拜访提醒
</nut-badge>

<nut-badge
    :value="9"
    :max="99"
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

<nut-badge
    :value="99"
    :max="99"
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

<nut-badge
    :value="200"
    :max="99"
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>

```

## 自定义位置

```html
<nut-badge 
    :value="200" 
    top="5px" 
    right="10px" 
    class="item"
>
    <div class="demo-svg"></div>
</nut-badge>
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| value | 显示的内容 | String | -
| max | value为数值时，最大值 | Number | 10000
| zIndex | 徽标的z-index值 | Number | 10
| isDot | 是否为小点 | Boolean | false
| hidden | 是否隐藏 | Boolean | false
| top   | 上下偏移量，支持单位设置，可设置为：5px、5rem等 | String | 0
| right  | 左右偏移量，支持单位设置，可设置为：5px、5rem等 | String | 0