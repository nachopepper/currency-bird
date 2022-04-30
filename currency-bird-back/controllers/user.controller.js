const { response, request } = require('express');
const { Op, fn, col, literal } = require("sequelize");
const User = require('../models/user.model');


const usuariosPost = async (req, res = response) => {

    const { name, email } = req.body;
    const { referalId } = req.query;
    let exists = null;

    let user = await User.findOne({ where: { email } });

    if (referalId) {
        exists = await User.findByPk(referalId)
    }

    if (user) {
        return res.json({
            ok: true,
            user
        });
    }

    user = new User({ name, email, referedBy: exists ? referalId : null });

    // Guardar en BD
    await user.save();

    res.json({
        ok: true,
        user
    });
}

const referedUsers = async (req, res = response) => {

    const users = await User.findAll({
        where: {
            referedBy: {
                [Op.ne]: null
            }
        },
        attributes: { exclude: ['id', 'name', 'email', 'createdAt', 'updatedAt'], include: ['referedBy', [fn('count', col('referedBy')), 'count']] },
        group: ['referedBy'],
        order: [[literal('count'), 'DESC']]
    });

    const filterUsers = await Promise.all(
        users.map(async (el) => {
            const userId = el.dataValues.referedBy;
            return {
                ...el.dataValues,
                name: await findUserById(userId)
            }
        })
    )

    res.json({
        ok: true,
        users: filterUsers,
    });
}

const findUserById = async (userId) => {
    const user = await User.findByPk(userId);
    return user.name;
}



module.exports = { usuariosPost, referedUsers }