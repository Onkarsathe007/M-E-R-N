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

savetoDB("Employee-name")
    .then((result) => {
        console.log("Result of promise : ", result);  // Handles resolve
    })
    .then((result) => {
        //this result will return 'undefind' value,because Promises in JavaScript only pass the resolved value from one .then() to the next if they return something explicitly.
        console.log('Result of Promise', result);  // Handles resolve
    })
    .catch((error) => {
        console.log("Result rejected :", error);  // Handles rejected
    });