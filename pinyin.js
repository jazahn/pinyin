// pinyin jquery plugin
(function($){

    $.fn.pinyin = function(){
        var that = $(this);
        this.on('keypress', function(e){
            var currentVal = that.val();
            // note: currentVal does not include the character that was typed on this keypress
            var lastChar = String.fromCharCode(e.charCode);

            if(parseInt(lastChar) <= 4 && parseInt(lastChar) >= 1){
                var secondLastChar = currentVal.slice(-1);

                var arr = ['a', 'e', 'i', 'o', 'u', 'v'];
                if(arr.indexOf(secondLastChar) > -1){
                    var letter = arr[arr.indexOf(secondLastChar)];
                    var pincombo = letter + lastChar;
                    var pinyinChar = pinyin_map[pincombo];

                    that.val(currentVal.slice(0, -1) + pinyinChar);
                    e.preventDefault();
                }

            }

        });
        return this;
    };

    var pinyin_map = {
        'a1': 'ā',
        'a2': 'á',
        'a3': 'ǎ',
        'a4': 'à',
        'e1': 'ē',
        'e2': 'é',
        'e3': 'ě',
        'e4': 'è',
        'o1': 'ō',
        'o2': 'ó',
        'o3': 'ǒ',
        'o4': 'ò',
        'i1': 'ī',
        'i2': 'í',
        'i3': 'ǐ',
        'i4': 'ì',
        'u1': 'ū',
        'u2': 'ú',
        'u3': 'ǔ',
        'u4': 'ù',
        'v1': 'ǖ',
        'v2': 'ǘ',
        'v3': 'ǚ',
        'v4': 'ǜ'
    };

}(jQuery));
