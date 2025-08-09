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

    savetoDB("Employee-name").then(()=>{
        console.log("Promise was resoved ")   //handels resolve
        }).catch(()=>{
            console.log("promise was rejected ");  //handles rejected 
        });