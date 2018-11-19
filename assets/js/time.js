$(document).ready(function() {
    var date = new Date();
    var format = "LLLL";
    var today = moment(date).format(format);
    console.log(today);

    $("#time").html(today);

    var one = "Philadelphia, PA, USA";
    console.log(one);
    var spl = one.split(" ");
    console.log(spl);
    console.log(spl[0]);
    console.log(spl.length)
    
}) 

