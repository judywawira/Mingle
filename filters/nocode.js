function(doc, req) {
  if (doc._id && doc._id.substr(0,8) === "_design/") {
    return false;
  } else {
    return true;
  }
}
