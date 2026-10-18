export const chatRouter = async (req, res) =>{
    const {message} = req.body;
    const user = req.user;
    if(!user){
        throw new Error("user not logged in")
    }
}