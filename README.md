# 📚 Gutenberg Book App

A clean, responsive React app to browse books by genre using the [Gutendex API](http://skunkworks.ignitesol.com:8000/) — styled with custom CSS and featuring infinite scroll + search.

## 🌐 Live Demo

🔗 [[Gutenberg demo app ](https://gutenberg-book-app.vercel.app/)]

---

## 🚀 Features

- 🎯 Genre-based book filtering (Fiction, History, Adventure, etc.)
- 🔍 Real-time search by book title or author
- 🔁 Infinite scrolling book list
- 📖 Opens books in the best available format (HTML > PDF > TXT)
- 📱 Responsive design for all devices
- ⚠️ Graceful fallback when no viewable version is available

---

## 🧱 Tech Stack

- **React.js** (Functional Components)
- **React Router DOM**
- **Custom CSS** (matching design guide)
- **Gutendex API** for book data
- **Vercel** for deployment

---

## 📦 Installation & Local Setup

```bash
git clone https://github.com/devSahilSingh/Gutenberg-book-app.git
cd gutenberg-book-app
npm install
npm run dev
http://localhost:5173/


```src/
│
├── components/
│   ├── GenreCard/
│   │   ├── GenreCard.jsx
│   │   └── GenreCard.css
│   ├── BookCard/
│   │   ├── BookCard.jsx
│   │   └── BookCard.css
│   ├── SearchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│
├── pages/
│   ├── Home/
│   │   ├── Home.jsx
│   │   └── Home.css
│   ├── BookList/
│   │   ├── BookList.jsx
│   │   └── BookList.css
│
├── utils/
│   └── getPreferredBookUrl.js
│
├── App.jsx
├── App.css
└── index.js
```
