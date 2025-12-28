async function greet() {
  // This function will returns promise either there is return value or not
  //throw "issue";                we can reject the promise here
  return "hello";
}

greet()
  .then(() => {
    console.log("Promise was fullfilled");
  })
  .catch((err) => {
    console.log("Promise was rejected with error : ", err);
  });

// function normally executes : PromiseState:fullfilled
//                             and return value will be stored in PromiseResult

//If there is an error in function : PromiseState:rejected
//                              and PromiseResult will be error that occured

async (params) => {
  //arrow async function return 5;
};

