define([
    'underscore'
], function (
    _
) {
    _.mixin({
        
        trim : function (str, trim) {
            if (str.indexOf(trim) === 0) {
                str = str.slice(1);
            }
            
            if (str.indexOf(trim) === str.length - 1) {
                str = str.slice(0, -1);
            }
            
            return str;
        }

    });
});