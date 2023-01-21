#  坤坤の关怀

在 VS Code 中连续写代码一小时（时间可配置），会有杨超越提醒你该休息啦~

## 使用

除了每过一小时会自动弹出提醒页面，也可以按 `F1`, 然后输入 `cxk: 打开提醒页面`来打开提醒页面

![usage](images/usage.png)

## 配置

* `cxk.reminderViewIntervalInMinutes`: 展示提醒页面的时间间隔（分钟）。(默认值为**60**)
* `cxk.title`: 提示文字。 (默认值为**小哥哥，小哥哥，代码写久了，该休息啦~**)
* `cxk.isDiy`: default (默认图)；url (图片地址)。(默认值为**default**)
* `cxk.customImages`: 配置图片数组（需要搭配cxk.type为url） (默认值为**默认图片**)

```
如下例子，使用自定义图片：
"cxk.isDiy": "url",
"cxk.customImages": [
    "url"
]
```