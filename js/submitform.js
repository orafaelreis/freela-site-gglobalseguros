
$('#formcontato').submit(function(e){
    e.preventDefault(); //Prevent Default action.
    var valid = validaForm(this);
    if (valid) {
      var url = 'http://rocky-ocean-9250.heroku.com/scripts-php/send-mail-to-gglobalseguros.php?access=1';

      var data = {
        'fnome': this.fnome.value,
        'ftelefone': this.ftelefone.value,
        'femail': this.femail.value,
        'fendereco': this.fendereco.value,
        'fmensagem': this.fmensagem.value,
        'fcodigo': this.fcodigo.value
      };

      $.ajax({
        async: true,
        type: "POST",
        url: url,
        contentType: "application/json;",
        data: JSON.stringify(data),
        success: function(data, b){
          $('#form_warning').addClass('success').html(data.success_message);
        },
        error: function(data, b){
          data = data.responseJSON;
          $('#form_warning').addClass('error').html(data.error_message);
        },
      });

      $('#formcontato').remove();
      $('#form_warning').attr('class','').html('Enviando...');
    }

    return false;
});
