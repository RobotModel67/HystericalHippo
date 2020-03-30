module.exports = {
    env: process.env.NODE_ENV || "development",

    development: {
        db: {
            url: 'mysql://root:@localhost:3306/alicia'
        }
    },
    production: {
        db: {
            dialect: "sqlite",
            storage: "db/database.sqlite"
        }
    }
};