// eslint-disable-next-line no-undef
const app = require("./app");
// eslint-disable-next-line no-undef
const config =require("./app/config");

//start server
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});