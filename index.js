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
                    html:obj.opis,
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    confirmButtonText:
                      '<i class="fa fa-thumbs-up"></i> Great!',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:
                      '<i class="fa fa-thumbs-down"></i>',
                    cancelButtonAriaLabel: 'Thumbs down'
                  })
            }
          }
    
        
       
    }
});