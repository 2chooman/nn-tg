# NN Telegram App

A simple single page application rebuilt with **React**. All views are implemented as React components and routed via `HashRouter`.

## Running locally

The app is entirely client side, but it must be served over HTTP. Use any static file server to host the `app` directory. For example with Python 3:

```bash
python3 -m http.server --directory app 8080
```

Then open `http://localhost:8080/index.html` in your browser.

You can use `npx http-server` or any other static server if you prefer.
