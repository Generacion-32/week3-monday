const express = require('express');
const routerAuthor = require('./author.router');
const routerCountry = require('./country.router');
const routerArticle = require('./article.router');
const routerCity = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use('/authores', routerAuthor)
router.use('/articles', routerArticle)

router.use('/countries', routerCountry)
router.use('/cities', routerCity)

module.exports = router;