var express=require('express')
var cors=require('cors')
var app=express();
app.use(cors())
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/kce').then(()=>console.log("Connected To Mongo"));
const kceSchema=new mongoose.Schema({
    url:{type:String,required:true},
    name:{type:String,required:true},
    price:{type:Number,required:true},
})

let foods=mongoose.model("foods",kceSchema);
let drinks=mongoose.model("drinks",kceSchema);
let snacks=mongoose.model("snacks",kceSchema);

app.use(express.json())

app.get('/getfoods', async function(request,response){
    const food= await foods.find();
    response.json(food);
})
app.get('/getdrinks',async function(request,response){
    const drink=await drinks.find();
    response.json(drink);
})
app.get('/getsnacks',async function(request,response){
    const snack=await snacks.find();
    response.json(snack);
})
app.listen(7000,()=>{
    console.log("welcome");
});