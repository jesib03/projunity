const mercadopago = require("mercadopago");
const {MP_TOKEN} = process.env

const paymentsControllers ={
 createOrder : async function ( req, res) {
     mercadopago.configure({
        access_token : MP_TOKEN
    });
   
      
      const result = await mercadopago.preferences.create({
        items:[
          {
            title: req.body.name,
            unit_price:1,
            currency_id:"ARS",
            quantity:1
          }
        ],
        back_urls: {
          success: "http://localhost:3001/succes",
          failure: "http://localhost:3001/failure",
          pending: "http://localhost:3001/pending"


          
        },
        notification_url: "https://3eb3-181-29-72-133.ngrok.io/webhook",
      });
      
      
      
      console.log(result)
      
      res.json(result.body);
  
},
receiveWebHook: async function (req, res){
    try {
        const payment = req.query;
        console.log(payment);
        if (payment.type === "payment") {
          const data = await mercadopago.payment.findById(payment["data.id"]);
          console.log(data);
        }
    
        res.sendStatus(204);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error });
      }
}
}



module.exports = paymentsControllers