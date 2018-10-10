Using Grunt
-----------

Before getting started using Grunt, you'll need to install [Node.js](https://nodejs.org). Once you have Node installed, you'll need to install the project
dependencies:

```
npm install
```

If you are on a Mac and do not have root administrator permissions, you may need to use sudo:

```
sudo npm install
```

With the dependencies installed, you can run the default dev tasks:

```
grunt
```


Debug Mode
----------

By default, Luminate Online will load the minified versions of assets such as stylesheets and JavaScript files. To force a page to load unminified assets,
set the debug session variable to "true" using the s_debug GET parameter:

```
&s_debug=true
```

Note that the minified versions of assets have a timestamp appended to their filename for cache-busting, however, the unminified versions do not. When in
debug mode, you may need to do a hard refresh after making a change to ensure your browser has the most up-to-date version of the file.

