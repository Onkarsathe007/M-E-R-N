//awiat : pauses the execution of surrounding async function until the the promise 
//is setteled.(resolved or rejeceted)

function getNumber()
{
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let num = Math.floor(Math.random()*10) + 1;
        if(num > 5)
        {
        console.log(num);
        resolve(); 
        }else{       //If promise getting rejected next work will not be dome 
            reject("Promise rejected");
        }
       },100)
    });
}
async function demo()
{
    try{
    await getNumber();    //we can use await keyword only inside the aync function  
//  Till the await call doesn't resolved surrounding async function won't be execute
    await getNumber();
    await getNumber();
    }catch(err){  // if num > 5 then promise will be rejectd 
        console.log("issue :",err);
    }
}
demo();