let closeCourses;
let local_obj = {latitude:40.4426135, longitude: -111.8631116, radius:100};
let courseId = 11819;
let p1Out;
let p2Out;
let p3Out;
let p4Out;
let p1In;
let p2In;
let p3In;
let p4In;

//this is the data I'm sending to the API

//this is sending the data to the api, having it return data in the form of JSON, parsing the data into a Javascript
//object, and then searching that object for the property(actually an array) of "courses" and returning the "p" index
// of the courses array

//this is totally working!
function loadMe() {
    console.log("loadMe called");
    $.post("https://golf-courses-api.herokuapp.com/courses", local_obj, function (data, status) {
        closeCourses = JSON.parse(data);
        console.log(closeCourses);
        for (let p in closeCourses.courses) {
            console.log(closeCourses.courses[p].name);
        }
    });
}
function getCourseInfo(){
    $.get("https://golf-courses-api.herokuapp.com/courses/" + courseId, function(data){
        //console.log(data);
    })
}
function outTotal(player){
    console.log("outTotal called");
    let i;
    let outTotal;
    for (i=0;i<9;i++){
        outTotal += Number($("#p" + player + "h" + i).val())
    }
    document.getElementById("player" + player + "Out").innerHTML = outTotal;
}

function inTotal(player){
    console.log("inTotal called");
    document.getElementById("player" + player + "In").innerHTML = ;
}
function totals(player){
    console.log("totals called");
    document.getElementById("player" + player + "Total").innerHTML = ;
}

//loadMe();
getCourseInfo();