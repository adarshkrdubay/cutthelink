from flask import Flask, request, redirect, jsonify
import sqlite3
import random
import string
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
conn = sqlite3.connect('url_shortener.db')
conn.execute('CREATE TABLE IF NOT EXISTS urls (id INTEGER PRIMARY KEY, short_url TEXT, long_url TEXT)')
conn.commit()
conn.close()
domainname= xyz.com #your domain whear the server is running
def generate_short_url():
    characters = string.ascii_letters + string.digits
    return domainname + ''.join(random.choice(characters) for _ in range(6))
@app.route('/')
def index():
    return "Welcome to the URL Shortener!"

@app.route('/shorten', methods=['POST'])
def shorten():
    data = request.get_json()
    long_url = data.get('long_url')

    if not long_url:
        return jsonify({'error': 'Missing long_url parameter'}), 400

    conn = sqlite3.connect('url_shortener.db')
    short_url = generate_short_url()
    conn.execute('INSERT INTO urls (short_url, long_url) VALUES (?, ?)', (short_url, long_url))
    print(short_url, long_url)
    conn.commit()
    conn.close()

    return jsonify({'short_url': short_url})
@app.route('/<short_url>')
def redirect_to_long_url(short_url):
    conn = sqlite3.connect('url_shortener.db')
    short_url='https://cutlinkapi.adarshkrdubay.repl.co/' + short_url
    result = conn.execute('SELECT long_url FROM urls WHERE short_url = ?', (short_url,))
    long_url = result.fetchone()

    if long_url:
        return redirect(long_url[0])
    else:
        return jsonify({'error': 'Short URL not found'}), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81)


