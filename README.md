
# 🔗 URL Shortener

A full-stack URL Shortener application built with **React**, **Express**, **MongoDB**, and **MUI**. This app allows users to create short URLs with optional custom shortcodes and expiration durations. It also tracks click statistics and provides an intuitive UI.

---

## 🚀 Features

- ✅ Create short URLs from long URLs
- 🕒 Set custom validity duration (in minutes)
- ✏️ Optional custom shortcodes
- 📊 Track total clicks and view analytics
- 🌐 Redirect to original URL via short link
- 📦 RESTful API backend using Express + MongoDB
- 🧑‍🎨 Clean UI built with React and Material-UI

---

## 🛠️ Tech Stack

| Frontend       | Backend     | Database  |
|----------------|-------------|-----------|
| React          | Node.js     | MongoDB   |
| Axios          | Express.js  | Mongoose  |
| React Router   | UUID        |           |
| Material-UI    | Body-Parser |           |

---

## 📁 Project Structure

```
backend/
├── index.js              # Main Express server
├── models/
│   └── url.js            # Mongoose schema
├── routes/
│   └── shorturl.js       # API routes for URL shortening
frontend/
├── src/
│   ├── App.js
│   ├── components/
│   │   └── UrlShortenerForm.js
│   ├── pages/
│   │   ├── ShortenerPage.js
│   │   └── StatisticsPage.js (optional)
│   └── services/
│       └── api.js        # Axios calls to backend
```

---

## ⚙️ Setup Instructions

### 🔧 Backend (Express + MongoDB)

1. Navigate to backend:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB server locally (or use MongoDB Atlas):
   ```bash
   mongod
   ```

4. Start backend:
   ```bash
   node index.js
   ```

> The server runs at: `http://localhost:3000`

---

### 🎨 Frontend (React)

1. Navigate to frontend:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start frontend React server:
   ```bash
   npm start
   ```

> The client runs at: `http://localhost:3001`

---

## 📌 Example

**Input:**
- URL: `https://www.facebook.com`
- Validity: `15` minutes
- Shortcode: _(optional)_

**Output:**
- Short Link: `http://localhost:3000/abc123`
- Expiry: `2025-07-11T07:20:29.075Z`

Clicking on the short link will redirect to the original URL if it's valid.

---

## 📦 API Endpoints

### POST `/shorturls`
Create a new short URL.

**Body:**
```json
{
  "url": "https://example.com",
  "validity": 30,
  "shortcode": "mycode"
}
```

**Response:**
```json
{
  "shortLink": "http://localhost:3000/mycode",
  "expiry": "2025-07-11T07:20:29.075Z"
}
```

---

### GET `/:shortcode`
Redirects to original URL or shows expiration message.

---

### GET `/shorturls/:shortcode`
Fetch stats of a short URL (clicks, expiry, etc).

---

## 🙋‍♂️ Author

**Krishna Master**

If you found this helpful, give it a ⭐ on GitHub!

---

## 📄 License

This project is licensed under the MIT License.
