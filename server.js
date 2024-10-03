// eslint-disable-next-line no-undef
const app = require("./app");
// eslint-disable-next-line no-undef
const config = require("./app/config");
// eslint-disable-next-line no-undef
const MongoDB = require("./app/utils/mongodb.util");

async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Connected to the database");

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }catch (error){
        console.log("Cannot connect to the database", error);
        // eslint-disable-next-line no-undef
        process.exit();
    }
}

startServer();