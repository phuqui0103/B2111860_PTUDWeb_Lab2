// eslint-disable-next-line no-undef
const express = require("express");
// eslint-disable-next-line no-undef
const contacts = require("../controllers/contact.controller");

const router = express.Router();

router.route("/")
    .get(contacts.findAll)
    .post(contacts.create)
    .delete(contacts.deleteAll);

router.route("/favorite")
    .get(contacts.findAllFavorite);

router.route("/:id")
    .get(contacts.findOne)
    .put(contacts.update)
    .delete(contacts.delete);

// eslint-disable-next-line no-undef
module.exports = router;