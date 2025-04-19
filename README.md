# Express - MongoDB  Auth Starter Kit

Backend starter kit with auth already set up.

<h2 style="margin-bottom: 0.5rem;">Built with:</h2>
<p>
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="Express.js" src="https://img.shields.io/badge/express-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/mongo-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img alt="Mongoose" src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white"/>
  <img alt="JWT" src="https://img.shields.io/badge/jwt-black?style=for-the-badge&logo=JSON%20web%20tokens"/>
</p>

- ✅ Register & login ready to go
- ✅ Token protected routes
- ✅ Clean file structure — easy to add new routes and handlers
- ✅ Start building your API immediately — just add your models and logic
- ✅ Great starting point for learning Express, Mongoose, and JWT


# 📦 Install and Setup

## Clone the project

```bash
git clone https://github.com/RaulJiminian/express-api-auth.git
cd express-api-auth
```

## Install Dependencies

```bash
npm install
```

## Environment Setup

Create a `.env` file at the root of the project:

```env
# Secret used by JWT for password encryption (can be any random string)
JWT_SECRET=passwordtothe
# MongoDB (serverless noSQL) connection string
MONGODB_URI=
# The port your dev server will run on
PORT=4000

```

## Get MongoDB Connection String

1. Go to [mongodb.com](https://mongodb.com) and sign up
2. Create a new project
3. Copy the connection string from the project dashboard
4. Paste it into your `.env` file under `MONGODB_URI`

> ⚠️ Ensure Network Access in MongoDB has your IP address as an allowed connection - you can set it "0.0.0.0/0" which allows all IP address.

## Run Project

```bash
npm run dev
```



# 🔐 Auth API Routes

These are the default auth endpoints included.

---

## Available Routes

| Route                | Method | Description                                                      |
| -------------------- | ------ | ---------------------------------------------------------------- |
| `/api/users/sign-up` | POST   | Create a new user (username + password)                          |
| `/api/users/sign-in` | POST   | Log in an existing user                                          |
| `/api/users/`        | GET    | Get a list of all users, but only return their username and \_id |
| `/api/users/:userId` | GET    | Get user info by userId                                          |

---

## ⚠️ `/api/users/` &  `/api/users/:userId`  only works after sign-in with token in header

After signing up or signing in, server returns a session token in a response**.  
The `/api/users/` &  `/api/users/:userId`  route will **only return user data\*\* if that token is present in the request header.

---

## Example Payloads

### `POST /api/users/sign-up`

```json
{
  "username": "alantothe",
  "password": "password123"
}
```

### `POST /api/users/sign-in`

```json
{
  "username": "byun211",
  "password": "password123"
}
```
