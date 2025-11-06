# 🌐 EZ-Labs Frontend Assignment — Contact Form (React)

A responsive single-page **Contact Form Web Application** built using **React.js** as part of the EZ Labs Frontend Task.  
This project focuses on **frontend validation, API integration**, and **responsive design** across all devices.

---

## 🚀 Features

- 🧩 Built with **React.js (Single Page Application)**
- 🧠 Validates form inputs before submission
- 📧 Email validation at the frontend
- 🌐 Integrated with live API → `https://vernanbackend.ezlab.in/api/contact-us/`
- 💬 Displays success message when API returns 200
- ⚠️ Prevents empty form submissions
- 📱 Fully responsive for mobile, tablet, laptop, and iPad
- 🎨 Clean, modern UI with gradient and glassmorphism design

---

## 🧠 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js |
| Styling | CSS3, Flexbox, Media Queries |
| API Integration | Fetch API |
| Tools | VS Code, Git, GitHub, Postman |

---

## 🧩 API Integration Details

**Base URL:**  
https://vernanbackend.ezlab.in/api/contact-us/

**Request Method:**  
`POST`

**Required Fields:**
- `name`
- `email`
- `phone`
- `message`

**Sample JSON Request:**
```json
{
  "name": "Amit",
  "email": "test@example.com",
  "phone": "9876543210",
  "message": "Testing contact form"
}

--------------------------------------------------
Sample Success Response
{
  "id": 49,
  "created_at": "2025-10-10T05:27:59.371578Z",
  "email": "test@example.com",
  "name": "Amit",
  "phone": "9876543210",
  "message": "Testing contact form",
  "updated_at": "2025-10-10T05:27:59.371598Z"
}
