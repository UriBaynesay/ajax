"use strict";

function getaddressBook(cb) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (
      httpRequest.readyState === XMLHttpRequest.DONE &&
      httpRequest.status === 200
    ) {
      cb(httpRequest.responseText);
    }
  };
  httpRequest.open("GET", "http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true", true);
  httpRequest.send();
}