

export const getUsers = async(req, res, next)=>{


    try{
        res.status(200).json('api is working')
    }
    catch(err){
        next()
    }
};

