function() {
  var md5 = $$(this).app.require("vendor/couchapp/lib/md5");
  
  // TODO this can be cleaned up with docForm?
  // it still needs the workflow to edit an existing profile
  var name = $('#userCtxName').val(),
      nickname = $('#nickname').val().trim();
  if (!nickname) {
    alert('You need to have a nickname, mate');
    $('#nickname').focus();
    return false;
  }
  var newProfile = {
    rand : Math.random().toString(), 
    nickname : nickname,
    //We put a value in email because other apps might expect it
    email : "nono@yo.biz",
    url : $("input[name=url]",this).val()
  };

  // setup gravatar_url
  if (md5) {
    newProfile.gravatar_url = 'http://www.gravatar.com/avatar/'+md5.hex($("input[name=email]",this).val() || newProfile.rand)+'.jpg?s=40&d=identicon';    
  }

  // store the user profile on the user account document
  $.couch.userDb(function(db) {
    var userDocId = "org.couchdb.user:"+name;
    db.openDoc(userDocId, {
      success : function(userDoc) {
        userDoc["couch.app.profile"] = newProfile;
        db.saveDoc(userDoc, {
          success : function() {
            $('#account').trigger("_init");
          }
        });
      }
    });
  });
  return false;
}
