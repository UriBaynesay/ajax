"use strict";

function onQuestionSent(ev) {
  ev.preventDefault();
  const elQuestion=document.querySelector('input');
  if(elQuestion.value.length>3&&elQuestion.value.endsWith('?')){
      getAnswer(renderAnswer);
  }else{
    elQuestion.value='';
  }
}

function renderAnswer(ans){
    const elRes=document.querySelector('.result-container');
    elRes.scrollIntoView();
    elRes.innerHTML=`
    <h1 class=ans>${ans['answer']}</h1>
    <img src=${ans["image"]}> `
    if(ans['answer']==='yes') getJoke(renderJoke);
    else getDog(renderDog)
}

function renderJoke(res){
    // console.log(res);
    document.querySelector('.respose-container').innerHTML=res['value']['joke'];
}

function renderDog(res){
    // console.log(res);
    document.querySelector('.respose-container').innerHTML=`<img src='${res['message']}' >`;
}