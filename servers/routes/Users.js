const extractToken = require('../helpers/help').extractToken;
const con = require('../config/connect');
const express = require('express');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const router = express.Router();
const md5 = require('md5');

// MIME TYPE FILE SETTINGS

const MIME_TYPE_MAP = {
    "image/png": 'png',
    "image/jpg": 'jpg',
    "image/jpeg": 'jpeg'
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Invalid Mime Type !");
        if (isValid) { error = null; }
        cb(error, " ektensi gambar !");
    }, filename: (req, file, cb) => {
        const name = file.originalname
            .toLowerCase()
            .split(" ")
            .join("-");

        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + "-" + Date.now() + "." + ext)
    }
})

const UploadAvatar = multer({
    storage: storage,
    limits: {
        fieldSize: 12 * 1024 * 1024
    }
}).single("avatar");

// Select or Create the Users table & Services Table

function SelectOrCreateTable() {

    con.query('SELECT * FROM users', function (err, result, fields) {
        if (err) {
            const sql = 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(150), username VARCHAR(15), password CHAR(32), email  VARCHAR(255) NOT NULL UNIQUE, userid VARCHAR(255), avatar VARCHAR(500) ) ';
            con.query(sql, function (err, result) {
                if (err) throw err;
            });
        }
    })
}

SelectOrCreateTable();

const JwtPrivateSecrt = '@ReactNodeMysql#alam-wibowo#starlova-services';

// Users Authentication
router.post('/login', async (req, res) => {
    var queryAuth;
    const pass = md5(req.body.password);
    const username = req.body.username;
    const email = req.body.email;
    // console.log(!email);
    queryAuth = `SELECT userid FROM users WHERE email = '${email}' OR username = '${username}' AND  password = '${pass}' `;
    con.query(queryAuth, async function (err, result) {
        if (result.length !== 0) {
           // GET USER ID
            GetUserId(result)
        }
        if (result.length === 0) {
            res.status(400).send({ message: 'error not found' });
        }
    });
    function GetUserId(rows){
        const result = Object.values(JSON.parse(JSON.stringify(rows)));
        const userid = result[0].userid;
        console.log("Get ID in CREATE TOKEN LOGIN : " + result[0].userid);


        if (username) {
            jwt.sign({ username: username, userid: userid }, JwtPrivateSecrt,
                (err, token) => {
                    res.status(200).send({ token: token, message: "Username Token Generated!" });
                });

        } else if (email) {
            jwt.sign({ email: email, userid: userid }, JwtPrivateSecrt,
                (err, token) => {
                    res.status(200).send({ token: token, message: "Email Token Generated!"});
                });
        }
    }
});

// Pendaftaran Users
router.post('/signup', async (req, res) => {
    const email = req.body.signup.email;
    // console.log(req.body.signup);
    const name = req.body.signup.fullname;
    const pass = md5(req.body.signup.pass);
    const username = req.body.signup.username;
    const userid = md5(email);

    if (username && email && pass && name) {
        con.query(`SELECT * FROM users WHERE email = '${email}' AND username = '${username}'`, function (err, result) {
            if (err) {
                res.send({ err: 'Terjadi kesalahan!' })
            }
            if (result.length === 0) {
                var sql = `INSERT INTO users (name, username, email, password, userid) VALUES ('${name}', '${username}', '${email}', '${pass}', '${userid}')`;
                con.query(sql, function (err, result) {
                    if (err) { throw err; }
                    res.status(200).send({ result, message: 'Pendaftaran berhasil!', code: 200 })
                    console.log(result)
                })

            } else {
                return res.status(201).send({ message: 'Email atau Username sudah digunakan!' })
            }
        })
    } else {
        res.status(203).send({ message: "Invalid input!" });
    }

})

router.put('update', UploadAvatar, (req, res) => {

    const Token = extractToken(req);
    var decoded, userid;

    if (!Token) {
        res.status(403).send({ message: "Authorization token is required" });
    } else {
        decoded = jwt.decode(Token, { complete: true });
        userid = decoded.payload.userid;
    }
   
    const avatar = req.body.avatar;
    const name = req.body.name;

    const UpdateUserQuery = `UPDATE users SET name = '${name}', avatar = '${avatar}' WHERE userid = '${userid}' `;
    if(userid){
        con.query(UpdateUserQuery, (error, result) => {
            if(error) throw error;
            if(result.length !== 0){
                res.status(200).send({
                    message: result,
                    status: 'success'
                })
            }
        })
    }
})

module.exports = router;
