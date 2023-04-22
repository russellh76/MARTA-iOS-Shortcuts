// five points would be completely different from any other stations
// north south stations (except 5p) would be adjusted pretty easily
// stations with multiple lines will require tweaking

function GetSchedule(){

var direction="Eastbound";
//direction="Westbound";
var childNodes;
var now = new Date();
var day = now.getDay();
var divselect=0;
var schedule;
var date=now.toLocaleDateString();

if (now.getHours()<4){
  day=day-1;  // the schedule shows after midnight times as day before
}

if (direction.indexOf("Eastbound")>-1){
    //eastbound
    switch(day) {
      case 0:  //sunday
        divselect=2;
        break;
      case 1,2,3,4,5:  //weekday
        divselect=0;
        break;
      case 6:  //saturday
        divselect=1;
        break;
      default:
        divselect=0;  // default to weekday
    }
}

if (direction.indexOf("Westbound")>-1){
    //westbound
    switch(day) {
      case 0:  //sunday
        divselect=5;
        break;
      case 1,2,3,4,5:  //weekday
        divselect=3;
        break;
      case 6:
        divselect=4;  //saturday
        break;
      default:
        divselect=3;  // default to weekday
    } //*/
}

//console.log("Day:"+day);
//console.log("Time"+time);
//console.log("divselect:"+divselect);

childNodes=document.getElementsByClassName("route-schedules__td-without-padding")[divselect].children;
for (var i = 0; i < childNodes.length; i++) { 
  //console.log(childNodes[i].innerHTML);
  if (childNodes[i].innerHTML.indexOf("--")==-1){
      schedule = new Date(date + " " + childNodes[i].innerHTML);
      //console.log("sched:"+schedule);
      if (schedule.getHours()<3){  // the schedule goes past midnight, so is confusing
          schedule.setDate(schedule.getDate() + 1); 
          //when it's not yet midnight, scheduled times after midnight and before 3am are the next day
          //and before midnight times are today
      }
      if (now.getHours()<3){ // the schedule goes past midnight, so is confusing
          schedule.setDate(schedule.getDate() - 1); 
          //when it's after midnight and before 3am the pre-midnight scheduled times are the previous day
          //and after midnight times are today
      }
      if (now < schedule){
        //console.log("now:"+now);
        //console.log("sched:"+schedule);
        console.log("The next " + direction + " train is scheduled for "+childNodes[i].innerHTML+".");
        break;  // we only want the next train
      }
  }
} 


} // end GetSchedule();



