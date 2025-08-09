let url = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("button");
let img = document.querySelector("img");
btn.addEventListener("click",async ()=>{
   let image  = await getImage();  //till the getting image source img.src will not be set
   img.src = image;
});

async function getImage(){
    try{
        let res = await axios.get(url);   
        //The axios.get(url) method will return a Promise that resolves to an 
        // Axios Response Object if the request is successful, or rejects with 
        // an error if the request fails.
        console.log(res);
        let img = res.data.message;
        return img; 
    }
    catch(e){
        return "ERROR TO FETCH AN IMAGE";
    }
}