"use strict"

function onInit(){
    getaddressBook(renderaddressBook)
}

function renderaddressBook(addressBook){
    const elContainer=document.querySelector('.address-book-container');
    const addressArr=JSON.parse(addressBook)
    const strHTML=addressArr.map((address,idx)=>{return`<div class="address-card">
    <img src="https://robohash.org/${idx}">
        <h3 class=first-name>First name :${address["fname"]}</h3>
        <h3 class=last-name>Last name :${address["lname"]}</h3>
        <h3 class=tel>Phone number :${address["tel"]}</h3>
        <h3 class=address>Address :${address["address"]}</h3>
        <h3 class=city>City :${address["city"]}</h3>
        <h3 class=state>State :${address["state"]}</h3>
        <h3 class=zio>Zip :${address["zip"]}</h3>
        </div>`
    })
    // console.log(strHTML);
    elContainer.innerHTML=strHTML.join('');
    // console.log(JSON.parse(addressBook));
}