'use strict';

// 3rd party resources
const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();

const sequelize = new Sequelize('postgres://localhost:5432/auth_demo');

app.use(express.json());

// Process FORM input and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Create Sequelize model

const Users = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

Users.beforeCreate((user, options) => {
    //HINT HINT HINT for lab
    console.log('BEFORE USE CREATION', user);
});

app.post('/register', async (req,res) => {
    // res.status(200).send('hello world');
    
    try {
        req.body.password = await bcrypt.hash(req.body.password, 5);
        const record = await Users.create(req.body);
        res.status(200).json(record);
        // grab password and hash it -- DONE
        // create user in DB with suername and hashed password --DONE
        // Response --DONE

    } catch (e) { res.status(403).send("Error Creating User"); }
});

app.post('/login', async (req,res) => {


    /*
    req.headers.authorization is : 'Basic sddfghghkj=='
    - Turn the string into an array by splitting on ' '
        - ['Basic', 'sddfghhlj']
    - Pop off the last value
        - 'sddfghhlj'
    -Decode the encoded string so it returns to : username:password
        - 'Zork@house:BestBoi'
    - split on ':' and turn into an array 
    - Pull username and pw from arry
        - let [ username, password ] = decodedstring.split(':')
    */

        let basicHeaderParts = req.headers.authorization.split(' ');
        let encodedString = basicHeaderParts.pop();
        let decodedString = base64.decode(encodedString); // Zork@home:BestBoi
        console.log('decoded string', decodedString);
        let [username,password] = decodedString.split(':');


        /*     
            1. Find user in the database by username
            2. compare plaintext vs hashed pw
                - bcrypt.compare(plainTextPW, hashedPWFromDB)
            3. Valid or throw err

        */
       try {
           const user = await Users.findOne({where: { username: username }});
           const valid = await bcrypt.compare(password, user.password);
           if (valid) {
               console.log('I MADE IT!!!!!!');
               res.status(200).json(user);
           }
           else {
               throw new Error('Invalid user');
           }
       } catch (error) { res.status(403).send("Invalid Login"); }
});



sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Server up'));
    }).catch(e => {
        console.error(`Could not start server. error: ${e.message}`);
    });