const User = require('../models/user.model');

const emailExists = async (email = '') => {

    // Verificar si el correo existe
    const emailExists = await User.findOne({ where: { email } });
    if (emailExists) {
        throw new Error(`El correo: ${email}, ya está registrado`);
    }
}

module.exports = { emailExists }

