**Pluralizer**

**1, 3, 5 rule for 3-forms languages Russian, for example**

var str1 = 'одна' + pluralize( 'ru', 1, ['штука', 'штуки', 'штук'] ) // "одна штука"

var str2 = 'три' + pluralize( 'ru', 3, ['штука', 'штуки', 'штук'] ) // "три штуки"

var str3 = 'пять' + pluralize( 'ru', 5, ['штука', 'штуки', 'штук'] ) // "пять штук"


**2-forms languages like english, french and german** 

var str1 = 'one' + pluralize( 'en', 1, ['thing', 'things'] ) // "one thing"

var str2 = 'three' + pluralize( 'en', 3, ['thing', 'things'] ) // "three things"

var str3 = 'five' + pluralize( 'en', 5, ['thing', 'things'] ) // "five things"