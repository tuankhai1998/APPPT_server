const db = require('../../db')

module.exports = {
    get: (req, res) => {
        let id_user = req.params.userID;
        let sql = 'SELECT * FROM `like` INNER JOIN roomView ON like.id_room = roomView.id WHERE id_user=?'
        db.query(sql, [id_user], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },


    delete: (req, res) => {
        let { id_user, id_room, index } = req.body
        console.log(id_user, id_room)
        let sql = 'DELETE FROM `like` WHERE id_room = ? AND id_user = ? '
        db.query(sql, [id_room, id_user], (err, response) => {
            if (err) throw err
            res.json(index)
        })
    },

    store: (req, res) => {
        let data = { ...req.body }
        let sql = "INSERT INTO `like` SET ?"
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'insert success!' })
        })
    },
}

// WHERE NOT EXISTS (SELECT like.id_room FROM like WHERE like.id_room=?) LIMIT 1a