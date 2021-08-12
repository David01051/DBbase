const bcryptjs = require('bcryptjs');
const { user } = require('../db');

async function registerUser(req,res){
    const {errors, isValid} = validateRegisterInput(req.body.user);
    if(!isValid){
        return res.status(400).json(errors);
    }
    await student.findOne({email: req.body.user.email}, (err, user) => {
        if (user){
            return res.status(400).json({email: "Email already exists"});
        }
        else {
            bcryptjs.genSalt(10, (err,self) => {
                bcrypt.hash(req.body.user.password, self, (err, hash) => {
                    if (err) throw err;
                    req.body.user.password = hash;
                    student.insertMany(req.body.user, (err) => {
                        if(err){
                            res.status(400).json({success: false, error: err})
                        }
                    })
                })
            })
        }
    })
} 