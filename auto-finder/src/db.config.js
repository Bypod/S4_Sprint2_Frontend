module.exports = {
    HOST: "s4sprint2restapi.cbkweywzlhmm.us-east-1.rds.amazonaws.com",
    USER: "root",
    PASSWORD: "C0ding!sH!p21",
    DB: "S4_Sprint_RestApi",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
}