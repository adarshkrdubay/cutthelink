# **Overview:**

The "Cut The Link" project is a simple URL shortener web application, allowing users to create shortened versions of long URLs. The project consists of both frontend and backend components. The frontend is built using HTML, CSS, and JavaScript, while the backend is implemented using the Flask framework in Python.

## **Frontend:**

### **HTML Structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... (meta tags and title) ... -->
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="container">
    <h1>Cut The Link</h1>
    <input type="text" id="original-url" name="original_url" placeholder="Paste your long URL here" required>
    <br><br>
    <button id="submit">Shorten</button>
    <div id="response" style="display: none;">
      <p id="linkid">Your shortened URL:</p>
      <a id="shortened-link" href="" target="_blank"></a>
    </div>
    <div id="responsenon" style="display: none;">
      <p id="errer">No url provided</p>
    </div>
  </div>
  <script src="./script.js"></script>
</body>
</html>
```

- The HTML file (index.html) includes the basic structure of the web page.
- It has an input field for the original URL, a "Shorten" button, and two div elements for displaying the response: one for successful responses and another for errors.

### **CSS Styling:**

```css
body {
  /* ... (existing styles) ... */
}

.container {
  /* ... (existing styles) ... */
}

/* ... (existing styles) ... */
```

- The CSS file (style.css) provides styling to enhance the visual appeal of the web page.
- It uses a flexbox layout to center the content and applies gradients for background colors.
- Form elements are styled for a clean and user-friendly interface.

### **JavaScript Functionality:**

```html
const button = document.getElementById("submit");
const result = document.getElementById("shortened-link");
const responseDiv = document.getElementById("response");
const responsenonDiv = document.getElementById("responsenon");
const resulterrer = document.getElementById("errer");

// ... (existing JavaScript code) ...
```

- The JavaScript file (script.js) handles user interactions and communicates with the backend.
- It includes functions to validate URLs, initiate URL shortening requests, and display the response to the user.
- The "Report an Issue" button is suggested to be added at the bottom right corner for users to report problems on GitHub.

## **Backend:**

### **Flask Server:**

```html
from flask import Flask, request, redirect, jsonify
import sqlite3
import random
import string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# ... (existing Flask server code) ...
```

- The backend is implemented using the Flask framework in Python (server.py).
- It defines routes for handling URL shortening requests and redirection.
- The server uses SQLite for storing URL mappings in a database.

### **URL Shortening Algorithm:**

```html
def generate_short_url():
    characters = string.ascii_letters + string.digits
    return domainname + ''.join(random.choice(characters) for _ in range(6))
```

- The generate_short_url function generates a short URL using a combination of letters and digits.
- When a URL shortening request is received, the server generates a short URL, stores it in the database, and returns it to the client.

### **Deployment and Configuration:**

```html
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81)
```

- The Flask server is configured to run on host 0.0.0.0 and port 81.
- The domainname variable needs to be updated with the actual domain where the server is running.


## **License:**

This project is licensed under the MIT License. Please refer to the license section in the code for details.

---

By Adarsh Kumar

**Date:** Aug 12, 2023

[GitHub Repository: "Cut The Link"](https://github.com/adarshkrdubay/cutthelink)
