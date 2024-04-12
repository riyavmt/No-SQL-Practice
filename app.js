const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
// const mongoConnect = require('./util/database').mongoConnect;

const mongoose = require('mongoose')
const User = require("./models/user")

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('661993977d342f26bbe502ea')
  .then(user => {
    req.user = user;
    next();
  })
  .catch(err => console.log(err));
  
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('mongodb+srv://riyavmt14:RiyaCluster001@cluster0.zywa9aq.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
  User.findOne().then(user=>{
    if(!user){
      const user = new User({
        name: "Riya",
        email: "riya@gmail.com",
        cart:{
          items:[]
        }
      })
      user.save();
    }
  })
  
  
  app.listen(3000)
})
.catch(err=>{
  console.log(err)
})



