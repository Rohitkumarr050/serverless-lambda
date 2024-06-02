const serverless = require('serverless-http');
const express = require('express');
const mongoose = require('mongoose');
// const { addOrUpdateText } = require('./mongodb');
const mysql = require('mysql2');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// async function InitMongodbServer(mongodbURI)
// {
//     try {
//         await mongoose.connect(mongodbURI);
//         console.info("Mongodb connected!");
        
//         return;
//     }
//     catch (error) {
//         console.log('Mongoose Connection Error: ', error)
//         process.exit(1);
//     }
// // }
// InitMongodbServer("mongodb://vroar_user:qccVBPd04g356L7jUp2GiEcGod8s5QSeRrdERIOP18R9KfTfb3KLHT67WBS9vFky@54.183.137.242:27017/vroar?authSource=admin")
// .then(console.log).catch(console.log)




// Create MySQL connection
const connection = mysql.createConnection({
  host: '54.169.34.61',
  user: 'dev_user',
  password: 'KIpH@980LO',
  database: 'acf_production'
});

// Connect to MySQL
connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Sample query
app.post('/api/user', (req, res) => {

  const { angelName, avatar_url, angelEmail, angelContact } = req.body;
  let query = `INSERT INTO users (group_id, name, avatar, email, contact_no ) 
  VALUES ('2', '${angelName}', '${avatar_url}', '${angelEmail}', ${angelContact} );`;

  connection.query(query, (err, results) => {
    if (err) throw err;

      res.json(results);
  });
});

app.get('/api/users', (req, res) => {

  const sql = 'SELECT * FROM users';
  connection.query(sql, (err, users) => {
    if (err) throw err;
    res.json(users);
  });
});


app.get('/api/info', async (req, res) => {
  res.send({ application: 'serverless lambda', version: '1' });
});

app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });
});
// app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);