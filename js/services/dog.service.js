'use strict'

function getDog(cb){
    $.get('https://dog.ceo/api/breeds/image/random',cb)
}