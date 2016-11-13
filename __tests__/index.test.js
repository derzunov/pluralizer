test( 'ru: plural form 0', () => {
    const pluralize = require( '../index' )
    expect( pluralize( 'ru', 0, [ 'штука', 'штуки', 'штук' ] ) ).toBe( 'штук' )
} )

test( 'ru: plural form 1', () => {
    const pluralize = require( '../index' )
    expect( pluralize( 'ru', 1, [ 'штука', 'штуки', 'штук' ] ) ).toBe( 'штука' )
} )

test( 'ru: plural form 23', () => {
    const pluralize = require( '../index' )
    expect( pluralize( 'ru', 23, [ 'штука', 'штуки', 'штук' ] ) ).toBe( 'штуки' )
} )

test( 'ru: plural form 145', () => {
    const pluralize = require( '../index' )
    expect( pluralize( 'ru', 145, [ 'штука', 'штуки', 'штук' ] ) ).toBe( 'штук' )
} )