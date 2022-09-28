
let button1=document.querySelector(".btn1");
let data1=document.querySelector(".data1");

button1.addEventListener("click",async function(){
   data1.innerHTML="Getting your data.....";
    try{
       const url=`https://dog.ceo/api/breeds/image/random`;
        let result=await fetch(url);
        let obj=await result.json();
        data1.innerHTML=
        `<img src="${obj.message}"/>`
        
    }
    catch
    {alert('country not found');
    }
    });

