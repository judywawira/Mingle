### See [demo](http://mingle.thedod.iriscouch.com/).

_Mingle_ is pretty similar to what [couchapp generate](http://www.couchapp.org/page/getting-started)
produces (i.e. a minimalistic chat application).

The main differences are:

* Users login via [BrowserID](https://browserid.org) (so you can use this as boilerplate code
  if you want BrowserID support).

* Security is a bit more hardened. E.g. - there _is_ a `validate_doc_update` function :)

* If your CouchDB server has an up to date version of the
  [BrowserID plugin](https://github.com/iriscouch/browserid_couchdb/),
  and you [setup](https://github.com/iriscouch/browserid_couchdb/commit/44a8deacdda6e2049cc37fc66e7360166b22cc76#L0R45)
 `/_config/browserid/hash_secret`, _Mingle_ becomes a _fairly anonymous_ application:

    * More about how anonymous you are _exactly_ - [here](https://github.com/thedod/Mingle/wiki/How-anonymous-is-fairly-anonymous).

    * More about what this is good _for_ (and how things can be improved) -
      [here](http://couchappsec.couch.it/Anonymous_accountability). 

### For documentation - [see the wiki](https://github.com/thedod/Mingle/wiki/)
