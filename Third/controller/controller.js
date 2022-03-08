const Book=require('../model/model');
let getbook=async (req,res)=>{
    let books;
    try{
         books=await Book.find();
    }
    catch(err){
        console.log(err);
    }
    res.json({books:books});
  

}
let deletebook = async (req,res)=>{
    let {id}=req.params;
    
    if(!id){
        console.log("err")
    }

    try{
        await Book.findOneAndDelete({name:id});
    }catch(err){
        console.log(err);
    }

    res.send("DELETED ")



}
let addbook=async (req,res)=>{
    data=req.body;    
    const book=new Book({
        name:data.name,
        price:data.price
    })
   
    try{
         await book.save();
    }catch(err){
        console.log(err);
    }
    res.json({book:book});
}
module.exports={getbook:getbook, addbook:addbook,deletebook:deletebook}