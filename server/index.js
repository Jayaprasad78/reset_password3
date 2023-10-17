const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors(
    {
        origin: ["https://reset-password3-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://jayaprasadb718:9632119392Jp78m@cluster0.bhccjgv.mongodb.net/userdata?retryWrites=true&w=majority');


app.get("/", (req, res) => {
    res.json("Hello");
})
app.post('/register', async(req, res) => {
    const { email, newPassword } = req.body;
    const userExist = await User.findOne({ email });
    console.log(userExist);
    // Find the user by email in the mock database
    //const user = users.find((user) => user.email === email);
  
    if (!userExist) {
      return res.status(404).json({ error: "User not found" });
    }
  
    // Update the user's password
    userExist.password = newPassword;
    userExist.cpassword = newPassword;
    console.log(userExist);
    await userExist.save();
    // In a real-world scenario, you would typically hash and securely store the password
    // but for simplicity, we're just updating it in the mock database.
  
    return res.status(200).json({ message: "Password changed successfully" });
  });
  
  
  


app.listen(3001, () => {
    console.log("Server is Running")
})
