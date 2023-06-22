const express= require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
const port =3000

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


app.post('/',(req,res)=>{

    console.log(req.body.num1)
    console.log(req.body.num2)
   
    var num1=Number(req.body.num1)
    var num2=Number(req.body.num2);
    var result =Number(num1+num2);
    console.log(result)

    res.send('Result of calculation is' + result );
})

app.get('/bmi',(req,res)=>{
    res.sendFile(__dirname+'/bmi.html')
})

app.post('/bmi',(req,res)=>{
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);

    var bmi=weight/(height*height);

    res.send('your bmi is '+ bmi)
    console.log(weight)
    console.log(height)
    console.log(bmi)


})
app.listen(port,()=>{
    console.log(`running${port}`)
})