const mongoose = require('mongoose');
const { mongodb : { HOST, PORT, DB } } = require('@configs/database-config');

module.exports = async () => {
    try {
        const database = await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`)
        
        console.log(`DB was connected successfully on port ${PORT}`);
        
        return database
    } catch (err) {
        console.log(`DB was not connected - ${err}`);
        process.exit(1)
    }
}