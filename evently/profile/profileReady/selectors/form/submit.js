function() {
  var form = $(this);
  var fdoc = form.serializeObject();
  fdoc.message = fdoc.message && fdoc.message.trim() || '';
  if (!fdoc.message) {
    return false;
  }
  form.attr('disabled','disabled');
  fdoc.profile = $$('#profile').profile;
  fdoc.type = 'message';
  fdoc.created_at = new Date();
  fdoc.topic = 'general'; // stub until editable
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
      form.removeAttr('disabled');
    },
    error : function() {
      form.removeAttr('disabled');
    }
  });
  return false;
};
