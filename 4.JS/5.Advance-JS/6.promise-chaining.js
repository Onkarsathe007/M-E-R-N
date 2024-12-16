function savetoDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4){
            resolve("success : data  saved !");
        }
        else{
            reject("failure : weak connection ! ");
        }
    });
}

    savetoDB("Employee-name").then((result)=>{
        console.log("Result of promise : ",result)   //handels resolve
        })
        .then((result)=>{
            console.log('Result of Promise',result)  //handels resolve
        })
        .catch((error)=>{
            console.log("Result rejected :",error);  //handles rejected 
        });