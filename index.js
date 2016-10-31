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

var pluralFormThreeFormsDefault = function( number, titles ) {
    var cases = [2, 0, 1, 1, 1, 2];
    return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
};

var pluralFormSixFormsDefault = function( number, titles ) {
    var plural = number === 0 ? 0 : number === 1 ? 1 : number === 2 ? 2 : number % 100 >= 3 && number % 100 <= 10 ? 3 : number % 100 >= 11 ? 4 : 5;
    return titles[plural];
};

var pluralize = function( languageCode, number, titles ) {
    switch( languageCode ) {
        case 'ar-AR' || 'ar':
            return pluralFormSixFormsDefault( number, titles );
            break;

        case 'en-UK' || 'en-US' ||  'en' || 'de-DE' || 'de' || 'fr-FR' || 'de':
            // En: 1 thing, 2 things, 5 things
            return pluralFormTwoFormsDefault( number, titles );
            break;
        default:
            // Default ru-RU for example - 1 штука, 3 штуки, 5 штук
            return pluralFormThreeFormsDefault( number, titles )

    }
};

module.exports = pluralize;