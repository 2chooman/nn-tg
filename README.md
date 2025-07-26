# NN Telegram App

A simple single page application built with HTML, CSS and vanilla JavaScript.

## Running locally

Because the app fetches additional HTML files via JavaScript it must be served 
over HTTP. Opening the `index.html` file directly from the file system will 
result in a CORS error in the browser.

Use any static file server. For example with Python 3:

```bash
python3 -m http.server --directory app 8080
```

Then open `http://localhost:8080/index.html` in your browser.

Alternatively you can use `npx http-server` or any other static server.
