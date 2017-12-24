let closeCourses;
let local_obj= {latitude:40.4426135, longitude: -111.8631116, radius:100};
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
/*function outTotal(){
    let player1 = document.GetElementById("player1");
    let player2 = document.GetElementById("player2");
    let player3 = document.GetElementById("player3");
    let player4 = document.GetElementById("player4");
    player1 = $("#p1h1").val();

    for (i = 0; i < 18; i++) {
        text += cars[i] + "<br>";
    }
}
*/
function inTotal(player){

}
function totals(player){

}
function buildCard(mytee){}

function fillCard(){}

function deletePlayer(){}

function getCourse(){}

function updateScore(){}
loadMe();