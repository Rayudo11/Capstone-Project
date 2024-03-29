const express = require("express");
const bodyParser = require("body-parser");
const clientsRouter = require('./routers/clients');
const consultationsRouter = require('./routers/consultations');

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use('/clients', clientsRouter)
app.use('/consultations', consultationsRouter)

app.get('/', (req, res) => {
  res.send('Welcome to our server!')
})

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});