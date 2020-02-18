const express = require("express")
const Product = require("./database/models/product")
const Manufacture = require("./database/models/manufacture")


const router =express.Router();


router.get('/',(req,res) => {
    Product.findAll({
        include: [{model:Manufacture}]
    }).then(res1 => {
        res.json(res1);
    });
});



router.post("/",(req,res) => {
    if(req.body !==null) {
    console.log(req.body); 
    let newPdt = {
        name:req.body.name,
        price:req.body.price
    };
    Product.create(newPdt).then(pdt => {
        
    })
    
    res.json({status:"executed"});  
    }
});

//let newManu = req.body.manufacture;
//Product.create(newPDt),then(pdt => {
 //   Manufacture.findONe({ where })
//}
//)

router.post("/manufacture",(req,res) => {
    if(req.body !==null) {
    console.log(req.body); 
    let newMan = {
        name:req.body.name,
        
    };
    Manufacture.create(newMan).then(man => {
        
    })
    
    res.json({status:"executed"});  
    }
});


module.exports = router;
