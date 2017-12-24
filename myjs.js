let closeCourses;
let local_obj = {latitude:40.4426135, longitude: -111.8631116, radius:100};
let courseId = 11819;
let courseData;

//this is the data I'm sending to the API

//this is sending the data to the api, having it return data in the form of JSON, parsing the data into a Javascript
//object, and then searching that object for the property(actually an array) of "courses" and returning the "p" index
// of the courses array

//this is totally working!
function loadMe() {
    //console.log("loadMe called");
    $.post("https://golf-courses-api.herokuapp.com/courses", local_obj, function (data, status) {
        closeCourses = JSON.parse(data);
        /*console.log(closeCourses);
        for (let p in closeCourses.courses) {
            console.log(closeCourses.courses[p].name);
        }*/
    });
}
function onLoad(){
    for(y=1;y<19;y++){
        document.getElementById("y" + y).innerHTML = courseData.holes[y].tee_boxes[2];
    }
}

function getCourseInfo(){
    $.get("https://golf-courses-api.herokuapp.com/courses/" + courseId, function(data){
        courseData = JSON.parse(data)
    })
}

//not working because my contentEditable's aren't returning a number or string, but an object
function outTotal(player){
    //console.log("outTotal called");
    let i;
    let outTotal = 0;
    for (i=0;i<10;i++){
        let score = "#p" + player + "h" + i;
        outTotal += Number($(score).text());
        console.log(outTotal);
    }
    //console.log(outTotal);
    document.getElementById("player" + player + "Out").innerHTML = "" + outTotal + "";
}

function inTotal(player){
    //console.log("inTotal called");
    let i;
    let inTotal = 0;
    for (i=10;i<19;i++){
        let score = "#p" + player + "h" + i;
        inTotal += Number($(score).text());
        //console.log("inTotal");
    }
    //console.log(inTotal);
    document.getElementById("player" + player + "In").innerHTML = "" + inTotal + "";
}

function totals(player){
    console.log("totals called");
    let total = Number($("#player" + player + "Out").text()) + Number($("#player" + player + "In").text());
    console.log(total);
    document.getElementById("player" + player + "Total").innerHTML = "" + total + "";
}
loadMe();
onLoad();
getCourseInfo();