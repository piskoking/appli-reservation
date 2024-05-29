const mongoose = require('mongoose');

const uri = 'mongodb+srv://papytyger69:azerty@rdvbusiness.eetqwk7.mongodb.net/'; // Remplacez cette URL par l'URL de votre base de données

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose.connection;
