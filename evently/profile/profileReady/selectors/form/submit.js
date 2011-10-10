function() {
  var form = $(this);
  var fdoc = form.serializeObject();
  fdoc.profile = $$('#profile').profile;
  fdoc.type = 'message';
  fdoc.created_at = new Date();
  fdoc.topic = 'general'; // stub until editable
  $$(this).app.db.saveDoc(fdoc, {
    success : function() {
      form[0].reset();
    }
  });
  return false;
};
