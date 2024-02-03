const User = require('../models/user')

module.exports = {
    getUser: async(req , res) =>{
        try{
            const user = await User.findById(req.user.id)

            const {password, __v,updatedAt , createdAt, ...userData} = user._doc;

            res.status(200).json(userData)
        }catch(error) {
            res.status(500).json(error)
        }
    },

    delete : async(req,res) =>{
        try {
            await User.findByIdAndDelete(req.user.id)
            req.status(200).json("User Successfully deletes")
        } catch (error) {
            req.status(500).json(error)
            
        }
    }, 




    
}