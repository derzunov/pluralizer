Pluralizer
==========

```javascript
var pluralize = require('pluralizr');
```



**Russian ( 3 forms )**

```javascript
var str1 = '1' + pluralize( 'ru', 1, [ 'час', 'часа', 'часов' ] ) // '1 час'

var str2 = '3' + pluralize( 'ru', 3, [ 'час', 'часа', 'часов' ] ) // '3 часа'

var str3 = '5' + pluralize( 'ru', 5, [ 'час', 'часа', 'часов' ] ) // '5 часов'

var str3 = '21' + pluralize( 'ru', 21, [ 'час', 'часа', 'часов' ] ) // '21 час'
```

**Polish ( other 3 forms )** 


```javascript
var str1 = pluralize( 'pl', 1, [ 'godzina', 'godziny', 'godzin' ] ) // 'godzina'

var str2 = pluralize( 'pl', 2, [ 'godzina', 'godziny', 'godzin' ] ) // 'godziny'

var str3 = pluralize( 'pl', 7, [ 'godzina', 'godziny', 'godzin' ] ) // 'godzin'

var str4 = pluralize( 'pl', 21, [ 'godzina', 'godziny', 'godzin' ] ) // 'godzin'
```

**English, French and German ( 2 forms )** 


```javascript
var str1 = '1' + pluralize( 'en', 1, [ 'hour', 'hours' ] ) // 'one hour'

var str2 = '3' + pluralize( 'en', 3, [ 'hour', 'hours' ] ) // 'three hours'

var str3 = '5' + pluralize( 'en', 5, [ 'hour', 'hours' ] ) // 'five hours'
```


**Chinese ( zh, zh_CN, zh_HK, zh_TW ), Japanese ( ja ), Kazakh( kk ), Korean( ko ), Persian ( fa ), Indonesian (id) and so on ( 1 form using )** 


```javascript
var str1 = pluralize( 'zh', 21, [ '小时' ] ) // '小时'

var str2 = '3' + pluralize( 'zh', 3, [ '小时' ] ) // '小时'

```
