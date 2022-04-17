'use strict'

function getJoke(cb){
    $.get('http://api.icndb.com/jokes/random',cb)
}