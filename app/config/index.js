
const config = {
    app: {
        // eslint-disable-next-line no-undef
        port: process.env.PORT || 3000,
    },
    db: {
        // eslint-disable-next-line no-undef
        uri: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/contactbook"
    }
}

// eslint-disable-next-line no-undef
module.exports = config;
