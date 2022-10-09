const router = require('express').Router()

router.get('/', () => {
    res.send('GET /places')
})



module.exports = router