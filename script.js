
function words( str ) {
    return String( str )
        .toLowerCase()
        .split( /\s|\b/ )
        .filter( function aplha( v ) {
            return /^[\w]+$/.test( v );
        } );
}

function unique( list ) {
    let uniqList = [];

    for ( let v of list ) {
        if ( uniqList.indexOf( v ) === -1 ) {
            uniqList.push( v );
        }
    }
    return uniqList;
}
