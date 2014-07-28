module.exports = {
    
    'icons@1x' : {
        src : 'public/img/sprite-icons/*@1x.png',
        destImg : 'public/img/sprite-icons@1x.png',
        destCSS : 'public/css/_sprites.icons@1x.scss',
        cssVarMap : function (sprite) {
            sprite.name = sprite.name.substr(0, sprite.name.length - 3) + '-1x';
        }
    },
    
    'icons@2x' : {
        src : 'public/img/sprite-icons/*@2x.png',
        destImg : 'public/img/sprite-icons@2x.png',
        destCSS : 'public/css/_sprites.icons@2x.scss',
        cssVarMap : function (sprite) {
            sprite.name = sprite.name.substr(0, sprite.name.length - 3) + '-2x';
        }
    }
    
};
