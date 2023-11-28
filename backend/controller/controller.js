

exports.testController = async(req,res)=>{
    try {
        res.status(200).json({
            result:"hello world"
        })
    } catch (error) {
        console.log(error);
    }
}