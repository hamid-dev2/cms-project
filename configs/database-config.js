const {
    MONGODB_HOST,
    MONGODB_PORT,
    MONGODB_DB,
} = process.env

module.exports = {
    mongodb : {
        HOST : MONGODB_HOST,
        PORT : MONGODB_PORT,
        DB : MONGODB_DB,
    }
}