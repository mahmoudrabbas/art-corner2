import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(" ")[1];
        if(token) {
            let decodeData = await jwt.verify(token, 'mahmoudrabbas')
            req.userId = decodeData?.id;
            next();
        }
    } catch (error) {
        console.log(error)
    }
}


export default auth