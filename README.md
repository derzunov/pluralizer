**Pluralizer**

**Правило 1, 3, 5 для языков с тремя формами, например, Русский**

var str1 = 'одна' + pluralize( 'ru', 1, ['штука', 'штуки', 'штук'] ) // "одна штука"

var str2 = 'три' + pluralize( 'ru', 3, ['штука', 'штуки', 'штук'] ) // "три штуки"

var str3 = 'пять' + pluralize( 'ru', 5, ['штука', 'штуки', 'штук'] ) // "пять штук"


**Для языков с двумя формами, как английский, французский и немецкий, например** 

var str1 = 'one' + pluralize( 'en', 1, ['thing', 'things'] ) // "one thing"

var str2 = 'three' + pluralize( 'en', 3, ['thing', 'things'] ) // "three things"

var str3 = 'five' + pluralize( 'en', 5, ['thing', 'things'] ) // "five things"