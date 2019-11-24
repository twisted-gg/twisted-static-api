import { config } from 'dotenv'

config()

export default {
  app: {
    acceptanceHost: process.env.ACCEPTANCE_HOST
  },
  database: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    dbname: process.env.DATABASE_DBNAME,
    adminAuth: process.env.DATABASE_ADMIN
  }
}
