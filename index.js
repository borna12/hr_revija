let searchIndex = (function () {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "../listici.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

//popis autora za linkove (možda ni ne treba)
/*var autori=[]
for (var i = 0; i < searchIndex.length; i++) {
    var obj = searchIndex[i];
    autor=obj.Autor
    if (autor.includes(";")){
        autori=autor.split(";")
        autor1=autori[0]
        autor1=autor1.split(", ")
        autor1=autor1[1] + " "+ autor1[0]
        autor1=autor1.replace("(*)","")
        autor1=autor1.replace("undefined","")
        autori.push(autor1);
        autor2=autori[1]
        autor2=autor2.split(", ")
        autor2=autor2[1] + " "+ autor2[0]
        autor2=autor2.replace("(*)","")
        autor2=autor2.replace("undefined","")
        autori.push(autor2);
    }
    else{
        autor=autor.split(", ")
        autor=autor[1] + " "+ autor[0]
        autor=autor.replace("(*)","")
        autor=autor.replace("undefined","")
        autori.push(autor);}
}*/

$(function () {
    obavijest = function (e) {
        id=$(e).attr('href').substring(1);
        for (var i = 0; i < searchIndex.length; i++) {
            var obj = searchIndex[i];
            opis=""
            if (obj.Autor==obj.Opis.substring(0, obj.Autor.length)){
               opis = obj.Opis.substring(obj.Autor.length, obj.Opis.length)
            }
            if (String(obj.Id)==id){
                Swal.fire({
                    title: obj.Title,
                    html:"<a href='../index.html#"+obj.Autor+"'>"+obj.Autor+"</a>"+opis.replace(/\n/g, '<br>'),
                    showCloseButton: true,
                    confirmButtonText:
                      'Zatvori',
                  })
            }
          }
    
        
       
    }
});