function() {
  var elem=$(this);
  navigator.id.getVerifiedEmail(function(assertion) {
    if (assertion) {
      // Verify through CouchDB.
      var url = '/_browserid';
      var to_verify = { 'assertion': window.encodeURIComponent(assertion)
                      , 'audience' : window.encodeURIComponent(window.location.host)
                      };
  
      $.ajax({
        url: url,
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(to_verify),
        dataType: "json",
        success: function(data, textStatus, jqXHR) {
          $('#account').trigger('_init'); // Now we're logged in
        },
  
        error: function(jqXHR, textStatus, errorThrown) {
          alert('error: '+textStatus);
        }
      });
    } else {
      // something went wrong!  the user isn't logged in.
      alert("BrowserID login failed or cancelled");
      $('#account').trigger('_init'); // Show login button again
    }
  });
}
