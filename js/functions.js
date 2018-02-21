/*
* Custom Functions go here.
* Functions do not have to be self-invoking
*/
$(function(){

    //Handlebars helper to limit char length in title cards
    Handlebars.registerHelper('limit', function(str){
     if (str.length > 100){
       return str.substring(0, 100) + '...' ;
    }
    return str;
    })

});
