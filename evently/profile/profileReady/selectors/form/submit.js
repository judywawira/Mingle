function() {
  var form = $(this);
  var fdoc = form.serializeObject();
  fdoc.message = fdoc.message && fdoc.message.trim() || '';
  if (!fdoc.message) {
    return false;
  }
  $('#message').attr('disabled','disabled');
  fdoc.profile = $$('#profile').profile;
  fdoc.type = 'message';
  fdoc.created_at = new Date();
  fdoc.topic = 'general'; // stub until editable
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
      $('#message').removeAttr('disabled');
    },
    error : function(stat,err,reason) {
      if (stat===403) { // session expired
        $('#account').trigger('_init');
      }
      alert("Error "+stat+": "+err+"\n"+reason);
      $('#message').removeAttr('disabled');
    }
  });
  return false;
};
