const express=require("express");

const app=express()


// ab?c -> it can be ac or abc -> Over here it means "b" is optional
// ab*c -> it can be ac,abc,abbc,abbbc,abbbbc,..... -> Over here it means "b" can be 0 or more times
// ab+c -> it can be abc,abbc,abbbc,abbbbc,..... -> Over here it means "b" can be 1 or more times
// ab{2,4}c -> it can be abbc,abbbc,abbbbc -> Over here it means "b" can be 2 to 4 times
// ab*c -> it can be ac,abc,abbc,abbbc,abbbbc,..... -> Over here it means "b" can be 0 or more times
// a(bc)d -> it can be abcd -> Over here it means "bc" is optional
// a(bc)+d -> it can be abcd,abcbcd,abcbcbcd,..... -> Over here it means "bc" can be 1 or more times
app.get("/ab?c",(request,response)=>{
    response.send({
        firstName:"Hritik",
        lastName:"Kumar"
    })
})

// Regex
// /a/ -> it can be a -> Over here it means "a" is mandatory -> if "a" is not there then it will not work
// /.*fly$/ -> it can be butterfly,dragonfly,housefly,..... -> Over here it means it should end with "fly"
app.get("/a/",(request,response)=>{
    response.send({
        firstName:"Hritik",
        lastName:"Kumar"
    })
})


// Query Parameters
// http://localhost:3000/user?name=Hritik&age=21
// http://localhost:3000/user?name=Hritik

app.get("/user",(request,response)=>{
    // To get the query parameters
    console.log(request.query)
    response.send({
        firstName:"Hritik",
        lastName:"Kumar"
    })
})

// Dynamic Parameters
// http://localhost:3000/user/101
// Many Dynamic Parameters
// http://localhost:3000/user/101/102/103/104

app.get("/user/:id",(request,response)=>{
    // To get the dynamic parameters
    console.log(request.params)
    response.send({
        firstName:"Hritik",
        lastName:"Kumar"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})