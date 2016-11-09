/*!
 * pluralizer <https://github.com/derzunov/pluralizer>
 *
 * Copyright (c) 2016, Dmitry Erzunov.
 * Licensed under the MIT License.
 */

'use strict';

var pluralFormTwoFormsDefault = function( number, titles ) {
    var plural = number !== 1 ? 1 : 0;
    return titles[plural]
};

var pluralFormTwoFormsSecond = function( number, titles ) {
    var plural = number > 1 ? 1 : 0;
    return titles[plural]
};

var pluralFormThreeFormsDefault = function( number, titles ) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

var pluralFormSixFormsDefault = function( number, titles ) {
    var plural = number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 ? 4 : 5;
    return titles[plural];
};

var pluralFormCs = function( number, titles ) {
    var plural = number === 1 ? 0 : number >= 2 && number <= 4 ? 1 : 2;
    return titles[ plural ];
};

var pluralFormPl = function( number, titles ) {
    var plural = number === 1 ? 0 : number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20) ? 1 : 2;
    return titles[plural];
};
// Just for uniformity
var pluralFormOneForm = function( number, titles ) {
    var plural = 0;
    return titles[plural];
};

var pluralize = function( languageCode, number, titles ) {
    switch( languageCode ) {
        case 'ar-AR':
        case 'ar':
            return pluralFormSixFormsDefault( number, titles );
            break;

        case 'cs':
            return pluralFormCs( number, titles );
            break;

        case 'pl':
            return pluralFormPl( number, titles );
            break;

        case 'en-UK':
        case 'en-US':
        case 'en':
        case 'de-DE':
        case 'de':
            return pluralFormTwoFormsDefault( number, titles );
            break;

        case 'fr-FR':
        case 'fr':
        case 'pt-BR':
        case 'br':
        case 'oc':
        case 'tr':
            return pluralFormTwoFormsSecond( number, titles );
            break;

        case 'ru-RU':
        case 'ru':
            // Default ru-RU for example - 1 штука, 3 штуки, 5 штук
            return pluralFormThreeFormsDefault( number, titles );
            break;

        default:
            return pluralFormOneForm( number, titles );

    }
};

module.exports = pluralize;