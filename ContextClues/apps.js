$(document).ready(function () {

    var friendName = ["Jeremy", "Dalton", "Chase", "Nick", "Ryan"];
    var locationName = ["Papa John's", "Waffle House", "the restroom", "the beach", "Chipotle", "the park", "Krippy Kreme", "Six Flags", "Sea World", "the face"];
    var weaponName = ["a knife", "a gun", "a piano wire", "a brick", "a frying pan", "a donut hole", "a bat", "a chain", "a lima bean", "a MacBook Pro","a book", "a pencil", "a dog", "a car", "a dirty sock", "a jar of PB", "a lamp", "a rock", "a trumpet", "a spoon"];
    
    function clickHandler(i) {
        return function () {
            alert(`Accusation ${i} I accuse ${friendName[i % friendName.length]}, with ${weaponName[i % weaponName.length]} in ${locationName[i % locationName.length]}! `);
        }


    }
    for (i = 1; i < 101; i++) {
        // console.log(locationName[i % locationName.length])
        var h3 = $("<h3></h3>")
        $('body').append(h3);
        h3.append(`Accusation ${i}`)
        h3.click(clickHandler(i));
    }


});