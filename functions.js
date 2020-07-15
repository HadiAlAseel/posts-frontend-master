
const saveManshours=(arr)=>{
     const savedManshour= localStorage.setItem('Manshours',JSON.stringify(arr));   
    }

const getManshours=()=>{    
    const json=localStorage.getItem('Manshours');
    const manshourObjArr=JSON.parse(json);
    return manshourObjArr===null? []: manshourObjArr;
}
    const removeMan=(mansh)=>{
    const manshoursToRemoveArr=getManshours();
    const manshIndex= manshoursToRemoveArr.findIndex(m=>m.number===mansh.number);
    // console.log(manshoursToRemove)
    const manshours=manshoursToRemoveArr.splice(manshIndex,1);
    return manshoursToRemoveArr;
    }
    const makeDOM=(oneMansh,timeStamp)=>{
    // const manshArr=getManshours();
        const listItem=document.createElement('a')
        const manshourBody=document.createElement('p');
        const statusEl=document.createElement('p')
        
        if (oneMansh.body===''){
            manshourBody.style.font="italic 20px arial,serif";
            manshourBody.style.textAlign='center';
            manshourBody.textContent='لا يوجد نص في هذا المنشور '
        }else{

            manshourBody.textContent=oneMansh.textBody;
        }
        // manshourBody.id=m.id;
        // console.log(manshourBody)
        listItem.classList.add('list-item')
        listItem.setAttribute('href',`./edit.html#${oneMansh._id}`)
        manshourBody.classList.add('list-item__body');
        moment.locale('ar_SA');
        statusEl.classList.add('list-item__subtitle');
        // oneMansh.updatedAt=moment().valueOf();
        // statusEl.textContent=`تم الانشاء   ${moment(timeStamp).fromNow()}`;
        listItem.append(manshourBody);
        // listItem.append(statusEl);
        return listItem;
    }

const render=(allDocuments)=>{
    console.log(allDocuments)
    // let mansh=getManshours();
                // m.createdAt=moment().valueOf();
if (allDocuments){
    allDocuments.map(m=>{
        let item=makeDOM(m);
        container.append(item);
    })

    } else{
        const messBox=document.createElement('p');
        messBox.classList.add('empty-message');
        messBox.textContent='..لا يوجد منشور لعرضه';
        container.append(messBox);    
    }
}


    