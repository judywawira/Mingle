function(e) {
  $('#new-profile').click(function(){
    var ctx=$$('#account').userCtx;
    if (ctx) {
      $('#profile').trigger('noProfile',[ctx]);
    } else {
      alert('Bug: #account has no userCtx');
    }
    return false;
  });
  $('#message').focus();
  $('#new-profile').removeClass('hidden');
}
