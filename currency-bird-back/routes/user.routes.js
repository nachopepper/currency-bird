
const { Router } = require('express');
const { check } = require('express-validator');
const { checkFields } = require('../middlewares');
const { usuariosPost, referedUsers } = require('../controllers/user.controller');

const router = Router();

router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(), 
    checkFields], usuariosPost);
    


router.get('/getReferals', referedUsers);

module.exports = router;