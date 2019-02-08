import express from 'express';
import db from './db';
// Set up the express app
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
});

//post metric
app.post('/metric/:key', (req, res) => {
  if (db[req.params.key]){
    //metric exists in db
    //so we must add value

    let newValue = db[req.params.key] + parseInt(req.query.value)
    console.log('Adding value to metric: ', db[req.params.key], ' by ', req.query.value)
    db[req.params.key] = newValue
    
  } else {
    //metric does not exist
    //so we add to db

    let value = parseInt(req.query.value)
    db[req.params.key] = value
  }

  //return empty object as response
  console.log('DB contents have been updated to: ', db)
  res.status(200).send({})
});

// get all metrics
app.get('/metric/:key/sum', (req, res) => {
  if (db[req.params.key]){
      res.status(500).send({'error': 'metric does not exist'})
  } else {
    res.status(200).send({'value': db[req.params.key]})
  }
});
