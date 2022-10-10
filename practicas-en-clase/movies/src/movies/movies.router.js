const router = require('express').Router()

//se hace un prefijo para no escribir toda la ruta y prevenir errores
// /api/v1/movies

router.get('/')
router.post('/')

router.get('/:id')
router.delete('/:id')
router.patch('/:id')
router.put('/:id')

module.exports = router