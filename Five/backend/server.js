const app=require('express')();
const mongoose=require('mongoose');
const Inventory=require('./model/Inventory');
const bodyparser=require('body-parser');
const cors=require('cors');

app.use(bodyparser.json());
app.use(cors());


app.get('/',async (req,res)=>{
  let data;
    try{
         data=await Inventory.find();
    }catch(err){
        console.log(err);
    }
    res.json({inventory:data})
})


app.post('/',async (req,res)=>{

    let data=req.body;

    const inv=new Inventory({
        name:data.name,
        quantity:data.quantity,
        price:data.price,
        total:data.quantity*data.price
    });

    try{
        await inv.save()
    }catch(err){
        console.log(err);
    }

    res.json({inventory:inv});
})
mongoose.connect("mongodb://localhost:27017/inven")
.then(()=>console.log("connected"))
.catch(()=>console.log("error in db"))

app.listen(9000,()=>{
    console.log(`http://localhost:9000`);
})
