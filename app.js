
const manshourBtn=document.querySelector('button');
const manshoursEl=document.getElementById('manshours')
console.log(manshoursEl)
const container=manshoursEl.parentElement;
// let arr=[];

arr=getManshours();
setTimeout(() => {
     fetch(`https://manshours-app-server.herokuapp.com/get`)
    .then(response => {
        return response.json()
    })
    .then(data=>{
        render(data);
    }).catch(err=>console.log(err))
}, 1000);

const timeStamp=moment().valueOf();

manshourBtn.addEventListener('click', async (e)=>{
    let manshourId;
    let number=Math.random();

        fetch('https://manshours-app-server.herokuapp.com/add-post',{
            method:'POST',
            body:JSON.stringify({
                number:number,
                textBody:""
            }),
            headers: {
                'Content-Type': 'application/json'              }
            })
             
            .then(response => {
                return response.json();
              })
              .then(data => {
                  manshourId= data.id;
                  console.log(data)
                  const obj=  {
                    _id:manshourId,
                    number:number,
                    textBody:''
                  };
                   arr.push(obj);
                   saveManshours(arr);
                    location.assign(`./edit.html#${obj._id}`)
              }).catch(err=>{
                  console.log(err)
              })

// updatedAt:timeStamp,
// createdAt:''


})

// container.addEventListener('click',(e)=>{
// // e.prevent
//    let manshId=e.target.id;
//    if (manshId!== 'create-manshour'){
//       console.log(manshId)
//       // location.assign(`./edit.html#${manshId}`)
//    }
// })



