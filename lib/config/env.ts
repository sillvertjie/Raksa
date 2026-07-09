export const env = {
  database: {
    url: process.env.DATABASE_URL ?? "",
  },

  auth: {
    secret: process.env.AUTH_SECRET ?? "",
  },
};