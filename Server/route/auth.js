const router = require("express").Router();
const User = require("../model/user");

router.post("/register",async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=new User({email,password});
        await user.save();
        res.status(201).json({ message: "User Registered successfully", user });
    }
    catch(err)
    {
        if (err.code === 11000) {
            return res.status(400).json({ message: "Email is already registered." });
        }
        console.error("Add user error:", err.message);
        res.status(500).json({ message: "Server error!" });
    }
});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });

        if (!existingUser) {
            return res.status(400).json({ message: "Invalid login attempt!" });
        }
        if (existingUser.password === password) {
            return res.status(200).json({ message: "Login successful", user: existingUser });
        }
    } catch (err) {
        console.error("Login error:", err.message);
        res.status(500).json({ message: "Server error!" });
    }
});

module.exports=router;