'use strict'

function onInit(){
    getTeams(renderTeams)
}

function renderTeams(teams){
    saveTeams(teams);
    const elTeams=document.querySelector('.teams-container');
    const strHTML=getTeamsLocal().map(team => `<div class=team-card onclick="onTeamClick(this)">${team.country}</div>`)
    elTeams.innerHTML=strHTML.join('');
}

function onTeamClick(elTeam){
    getSchedule(getTeamCode(elTeam.innerText)['country-code'],renderSchedule)
}

function renderSchedule(schedule){
    const scheduleObj=JSON.parse(schedule);
    console.log(scheduleObj);
    const elSchedule=document.querySelector('.schedule-modal');
    const strHTML=scheduleObj.map(game => {return `<h3 class="venue">Venue :${game['venue']} ${game["location"]}</h3>
    <h3>Time :${game["datetime"]}</h3>
    <h3>Winner :${game["winner"]}</h3>`});
    elSchedule.innerHTML=strHTML.join('')
}