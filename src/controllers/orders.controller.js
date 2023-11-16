export class OrdersController{
    static getOrder = async(req,res)=>{
        try {
            res.json({status:"success", message:"getOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static createOrder = async(req,res)=>{
        try {
            res.json({status:"success", message:"createOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };

    static modifyStatusOrder = async(req,res)=>{
        try {
            res.json({status:"success", message:"modifyStatusOrder"});
        } catch (error) {
            console.log(error);
            res.json({status:"error", message:"Hubo un error en esta solicitud"})
        }
    };
}