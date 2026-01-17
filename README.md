
# 📦 Technical Test - Simple Logistic Api

This api is created with **Express.js**, **PostgreSQL**, and **Sequelize ORM**.

---
## 🚀 Prerequisite

Make sure you have installed the following tools:

- **Node.js** >= v18.x.x  
- **npm** or **bun**

---

## 📥 Installation

1. Clone repository:

   ```bash
   git clone https://github.com/pius706975/technical-test-simple-logistic-api.git
   ```

2. Install the dependencies:

   ```bash
   npm i 
   # or
   bun i
   ```

3. Use the existing `.env.development` to store the environment configuration:

   ```bash
   .env.development
   ```

## Run the database migration
   ```bash
      npm run migration
      #or
      bun run migration
   ```

## Run the database seeder to use the existing sample data
   ```bash
      npx sequelize-cli db:seed:all
      #or
      bunx --bun sequelize-cli db:seed:all
   ```

## 🏃 Run the server and the test

Run the server in the development mode:
   ```bash
   npm run dev
   #or
   bun run dev
   ```

Or in the production mode

```bash
npm start
#or
bun start
```

## 📚 API Documentation

Access swagger documentations: [http://localhost:3000/api-docs](http://localhost:5000/api-docs)

Swagger will automatically return the documentations based on route file annotation.

---

## 👨‍💻 Contributor

- Pius Restiantoro - [GitHub](https://github.com/pius706975)