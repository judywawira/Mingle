function(data) {
  // $.log(data)
  return {
    items : data.rows.map(function(r) {
      var p = (r.value && r.value.profile) || {},
          m = (r.value && r.value.message) || '';
      // the replace() tweak is ugly, but twttr doesn't support {target:"_blank"} for @name, #tag, etc.
      p.message = twttr.txt.autoLink(twttr.txt.htmlEscape(m)).replace(/<a /g,'<a target="_blank" ');
      p.id = 'm' + ((r.value && r.value._id) || new Date().getTime().toString());
      return p;
    })
  }
};
