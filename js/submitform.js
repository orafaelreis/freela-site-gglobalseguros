
$('#formcontato').submit(function(e){
    e.preventDefault(); //Prevent Default action.
    var valid = validaForm(this);
    if (valid) {
      var url = 'http://rocky-ocean-9250.heroku.com/scripts-php/send-mail-to-gglobalseguros.php?access=1';
      // var url = 'http://localhost:8888/heroku/php-getting-started/web/scripts-php/send-mail-to-gglobalseguros.php?access=1';
      // var url = 'http://orafaelreis.web2319.uni5.net/send-mail-to-gglobalseguros.php?access=1';

      var data = {
        'fnome': this.fnome.value,
        'ftelefone': this.ftelefone.value,
        'femail': this.femail.value,
        'fendereco': this.fendereco.value,
        'fmensagem': this.fmensagem.value,
        'fcodigo': this.fcodigo.value
      };

      // $.ajax({
      //   async: true,
      //   type: "POST",
      //   url: url,
      //   crossDomain: true,
      //   contentType: "application/json;",
      //   // dataType: 'json',
      //   // data: JSON.stringify(data),
      //   success: function(data){
      //     $('#form_warning').addClass('success').html(data.success_message);
      //   },
      //   error: function(data){
      //     data = data.responseJSON;
      //     $('#form_warning').addClass('error').html(data.error_message);
      //   },
      // });

      var data = null;

  var xhr = new XMLHttpRequest();

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });

  xhr.open("OPTIONS", "https://rocky-ocean-9250.heroku.com/scripts-php/send-mail-to-gglobalseguros.php?access=1");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.send(data);


      $('#formcontato').remove();
      $('#form_warning').attr('class','').html('Enviando...');
      // $.post( url, , )
      // .done(function (data) {
      // }).fail(function(data) {
      //   $('#form_warning').html('<p class="error"' + data.error_message + '</p>');
      // });
    }

    return false;
});
