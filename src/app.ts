

import  express,{Request,Response} from "express";




const app = express()


// server er ekti route
 app.get("/",(req:Request ,res:Response) => {
    res.status(200).json({
        message:"Welcome to our tour management"
    })
 })



 export default app