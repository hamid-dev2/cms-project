const { Router } = require("express");
const router = Router()
const { showWeb } = require('@controllers/web/index-controller');
const { $404_error } = require('@controllers/errors/web-errors-controller');

router.get("/", showWeb)
router.use($404_error)

module.exports = router