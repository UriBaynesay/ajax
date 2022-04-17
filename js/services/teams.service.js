"use strict";

let gTeams;

function getTeamCode(teamCountry){
    return gTeams.find(team => team.country===teamCountry)
}

function getTeamsLocal(){
    return gTeams;
}

function saveTeams(teams){
    const teamsArr=JSON.parse(teams);
    gTeams=teamsArr.map(team=>({country:team['country'],'country-code' : team['fifa_code']}))
    // console.log(gTeams);
}

function getTeams(cb) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (
      httpRequest.readyState === XMLHttpRequest.DONE &&
      httpRequest.status === 200
    ) {
      cb(httpRequest.responseText);
    }
  };
  httpRequest.open(
    "GET",
    "http://worldcup.sfg.io/teams/",
    true
  );
  httpRequest.send();
}

function getSchedule(teamCode,cb){
    var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (
      httpRequest.readyState === XMLHttpRequest.DONE &&
      httpRequest.status === 200
    ) {
      cb(httpRequest.responseText);
    }
  };
  httpRequest.open(
    "GET",
    `http://worldcup.sfg.io/matches/country?fifa_code=${teamCode}`,
    true
  );
  httpRequest.send();
}