let searchIndex = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../test2.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();


$(function () {
    obavijest = function (e) {
        id=$(e).attr('href').substring(1);
        
        for (var i = 0; i < searchIndex.length; i++) {
            var obj = searchIndex[i];
            if (String(obj.id)==id){
                Swal.fire({
                    title: obj.title,
                    html:obj.opis.replace(/\r\n/g, '<br>'),
                    showCloseButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      'Zatvori',
                    confirmButtonAriaLabel: 'Thumbs up, great!',

                  })
            }
          }
    
        
       
    }
});