### Server-specific customization of _Mingle_

To enable you to manage more than one node without messing the CouchApp
(_and_ the git repository), you can create an optional design document
called `_design/customize` in the same database (i.e. `mingle`).

To customize the look of a server (let's call it `mynode1`):

* `cp -a example mynode1`
* `cd mynode1`
* Edit the files there (see details below)
* `CouchApp push <em>somewhere</em>` where _somewhere_ is either a URL or a name of an `env` in your `.couchapprc` (note that `.couchapprc` in this folder is a convenient symbolic link to `../../.couchapprc`)

What can you edit there? This "CouchApp" simply  contains 2 attachments: `branding.js` and `welcome.html`

### Branding.js
In the first 2 lines, you can simply enter a name for the node (free form text, spaces are allowed)
and a URL for a landing page (a welcome page before users connect to the app, telling them what it's about).

The other 2 lines simply write the content of the `#branding` div and change the window's title.

If you want this script to do something else, note that it is sourced inside the `#branding` div
(so `document.write()` would put server-specific html where you'd expect it to go), but, of course, you can
do whatever else javascript lets you do.

### Welcome.html
Welcome.html in the `example` folder is (or at least used to be) a copy of the landing page at one of
the demo sites ([Romain Gary](http://mingle.thedod.iriscouch.com)). You may want to put something
completely different there (or at least edit/delete the div where it says the server's name and offers
an alternate server).
If you want to use this more or less "as is", note that it uses thedod.iriscouch.com in many `href` `src` etc.
attributes, so best is to massively search/replace it.

As opposed to `branding.js`, `welcome.html` in itself won't _show_ the landing page
at some domain that points to your CouchDB server. It would simply make this html _available_.

After pushing the CouchApp, you should go to the `Configuration` tool of the server's futon interface,
and use the `Add a new section` link (bottom left) to add a config option where
`section` is `vhosts` `option` is your domain (e.g. `mingle.me.iriscouch.com` or `whatever.com:5984`)
and value is `/mingle/_design/customize/welcome.html`.
