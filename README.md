![Sample pane files](/assets/logo.png "Before")

`vs-nice-index` is a `VS Code` extension that renames `index.js` files to their `parent` directory names.

```
about/index.html  -> /about
Home/index.jsx    -> /Home
server/index.js   -> /server
```

## Why

It's common practice, in web development, to give your directories semantically-relevant names, but to give the primary file the name of `index.js`, `index.html`, `index.css`, etc.

Web servers like apache will, by default, automatically try and serve index.html or index.php files when you request a directory. So, `http://www.google.com/` will attempt to serve `http://www.google.com/index.html`. This allows us to hide the file extension from the user, and provide nicer URLs.

In Node.js and ES2015 Javascript imports, this same convention was adopted. You can `require` or `import` a path like `/components/Home`, and it will attempt to find an `index.*` file within it.

The end result is that a lot of projects are packed with files like `index.js`, `index.html`, `index.css`, etc. Here's an example structure from a React app:

```
.
├── components
|   ├── Home
|   |   ├── index.jsx
|   |   └── index.css
|   ├── Header
|   |   ├── index.jsx
|   |   └── index.css
|   └── Footer
|   |   ├── index.jsx
|   |   └── index.css
├── server
|   └── index.js
└── index.html
```

In VS Code, this means your files will look something like this:

![Sample pane files](/assets/before.png "Before")

This is not good! All the filenames are the same. VS Code tries to be helpful by showing the directory name after the filename, but when you have more than a couple of files open, that stuff all gets hidden.

### There must be a better way...

Wouldn't it be nicer if, for all `index.*` files, we just showed the parent directory? Something like:

![Better pane files](/assets/after.png "After")

This way, we get the best of both worlds. We get semantically meaningful tab names in VS Code while developing, and we can still reap all the benefits of using the index.* convention.  

## Similar Projects
- [nice-index](https://github.com/joshwcomeau/nice-index) for `Atom Editor` by [Joshua Comeau](https://twitter.com/JoshWComeau)

## Credit and Acknoledgement
- `README` file is an edited clone of [Joshua Comeau](https://twitter.com/JoshWComeau)'s [nice-index](https://github.com/joshwcomeau/nice-index)  
- Logo Designer: [Adenekan Wonderful](https://github.com/adenekan41)


## Author & Contributors
* [Uche Jude](https://github.com/iamuchejude)
* [Adenekan Wonderful](https://github.com/adenekan41)

**Enjoy!**
