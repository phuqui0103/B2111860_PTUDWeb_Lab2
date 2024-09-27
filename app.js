/* eslint-disable no-undef */
const contactsRouter = require("./app/routes/contact.route");
const express = require("express");
const cors = require("cors");
const ApiError = require("./app/api-error");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application."});
});
app.use("/api/contacts", contactsRouter);
// handle 404 response
app.use((req, res, next) => {
    // Code ở đây sẽ chạy khi không có route được định nghĩa nào
    // Khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi
    return next(new ApiError(404, "Resource not found"));
});

// define error-handling middleware last, after other app.use() and routes calls
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    // Middleware xử lí lỗi tập trung
    // Trong các đoạn code xử lý ở các route, gọi next(error) sẽ chuyển về middleware xử lí lỗi này
    return res.status(console.error.statusCode || 500).json({
        message: err.message || "Internal Server Error",
    });
});
// eslint-disable-next-line no-undef
module.exports = app;

