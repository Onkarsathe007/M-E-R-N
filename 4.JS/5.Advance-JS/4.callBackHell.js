let h1 = document.querySelector("h1");

     //   setTimeout(() => {
     //       h1.style.color = "orange"
     //   }, 1000);
     //   
     //   setTimeout(() => {
     //       h1.style.color = "grey"
     //   }, 2000);
     //   
     //   setTimeout(() => {
     //       h1.style.color = "greeen"
     //   }, 3000);

//but if we have very large amount of taks that we want to do.



//This call as callBack Hell
//The term "Callback Hell" refers to the situation in asynchronous programming where multiple nested callbacks are used, 
//leading to code that is difficult to read, maintain, and debug.
function changeColor(color,delay,nextColor)
{
   setTimeout(() => {
    h1.style.color = color;
   },delay);
   if(nextColor)
   {
    nextColor();
   }
}

//calling the function 
changeColor("red",1000,()=>{
    changeColor("yellow",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("pink",1000,()=>{

            });
        });
    });
});

//to overcome the callback we use 
function savetoDB(para1,success,failure){
    let internetSpeed = Math.floor(Math.random()*10) + 1;
    if(internetSpeed > 4)
    {
        success();
    }else{
        failure();
    }
}

//This is callback hell
//Asynchronous Situation 

//level - 1
        savetoDB("first-data",()=>{
            console.log("success callback : Your data was saved !");
            //level -2 
            savetoDB("hello world",()=>{
                console.log("success2 : data2 saved");
                //level- 3
                savetoDB("Shri krishna",()=>{
                    console.log("success 3 : data-3 saved successfully !");
                },()=>{
                    console.log("failure 3: failure 3")
                });
            },()=>{
                console.log("failure 2 : Unable to store the data");
            });
        
        },()=>{
            console.log("failure callback :Weak connection, data not saved .");
        });


//TO Overcome the CallBack Hell     
//using the promises : 