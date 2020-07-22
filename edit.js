const body=document.querySelector('textarea');
const removeBtn=document.getElementById('remove');
const addBtn=document.getElementById('add');
let manshourobjs=getManshours();
const manshId=location.hash.substr(1);
let manshour=manshourobjs.find(m=>
    m._id===manshId);
    console.log(manshour)
let manshourBody;
body.value=manshour.textBody;
// setTimeout(() => {
//      fetch(`https://posts-2610.herokuapp.com/get/:${manshId}`)
//     .then(response => {
//         return response.json()
//     })
//     .then(data=>{
//         manshourBody=data;
//         console.log(manshourBody);
//     })    
// }, 1000);
body.addEventListener('input',()=>{
    console.log(manshour)

    manshour.textBody=body.value;
    // body.value=e.target.value;   
})

addBtn.setAttribute('href',`index.html`)
addBtn.addEventListener('click',()=>{
    console.log(manshour.textBody)
    fetch('https://manshours-app-server.herokuapp.com/update-post',{
            method:'PUT',
            body:JSON.stringify({
                id:manshId,
                number:manshour.number,
                textBody:manshour.textBody
            }),
            headers: {
                'Content-Type': 'application/json'
              }
        })
            .then(response => {
                return response.json();
              })
              .then(data => {
                  console.log(data)
              }).catch(err=>{
                  console.log(err)
              })
              saveManshours(manshourobjs)
// manshour.updatedAt=moment().valueOf();
console.log(manshour.textBody)
location.assign(`./index.html`);
})
removeBtn.addEventListener('click',()=>{
    fetch('https://manshours-app-server.herokuapp.com/delete-post',{
        method:'DELETE',
        body:JSON.stringify({
            id:manshId,
            number:manshour.number,
            textBody:manshour.textBody
        }), headers: {
            'Content-Type': 'application/json'
          }
    })
        .then(response => {
            return response.json();
          })
          .then(data => {
              console.log(data)
          }).catch(err=>{
              console.log(err)
          })    
manshourobjs= removeMan(manshour);
saveManshours(manshourobjs);
location.assign(`./index.html`);
})