










var url="https://itsmarta.com/Decatur.aspx";
let wv=new WebView();
await wv.loadURL(url, true);


// build the function as a string
var getData='function GetSchedule(){';
getData=getData+'var direction="Eastbound";';
//getData=getData+'var direction="Westbound";';
getData=getData+'var childNodes;';
getData=getData+'var now = new Date();';
getData=getData+'var day = now.getDay();';
getData=getData+'var divselect=0;';
getData=getData+'var schedule;';
getData=getData+'var date=now.toLocaleDateString();';
getData=getData+'if (now.getHours()<4){';
getData=getData+'  day=day-1;';  
// after midnight, we need to look at previous day schedule
getData=getData+'}';





getData=getData+'if (direction.indexOf("Eastbound")>-1){';
getData=getData+'    switch(day) {';
getData=getData+'      case 0: ';
getData=getData+'        divselect=2;';
getData=getData+'        break;';
getData=getData+'      case 1,2,3,4,5: ';
getData=getData+'        divselect=0;';
getData=getData+'        break;';
getData=getData+'      case 6:  ';
getData=getData+'        divselect=1;';
getData=getData+'        break;';
getData=getData+'      default:';
getData=getData+'        divselect=0; ';
getData=getData+'    }';
getData=getData+'}';





getData=getData+'if (direction.indexOf("Westbound")>-1){';
getData=getData+'    switch(day) {';
getData=getData+'      case 0:  ';
getData=getData+'        divselect=5;';
getData=getData+'        break;';
getData=getData+'      case 1,2,3,4,5: ';
getData=getData+'        divselect=3;';
getData=getData+'        break;';
getData=getData+'      case 6:';
getData=getData+'        divselect=4; ';
getData=getData+'        break;';
getData=getData+'      default:';
getData=getData+'        divselect=3; ';
getData=getData+'    } ';
getData=getData+'}';



getData=getData+'childNodes=document.getElementsByClassName("route-schedules__td-without-padding")[divselect].children;';
getData=getData+'for (var i = 0; i < childNodes.length; i++) { ';
getData=getData+'  if (childNodes[i].innerHTML.indexOf("--")==-1){';  
// double hyphen is not a valid time



getData=getData+'      schedule = new Date(date + " " + childNodes[i].innerHTML);';

getData=getData+'      if (schedule.getHours()<3){  ';
getData=getData+'          schedule.setDate(schedule.getDate() + 1); ';
getData=getData+'      }';
// The scheduled times after midnight are the next day


getData=getData+'      if (now.getHours()<3){ ';
getData=getData+'          schedule.setDate(schedule.getDate() - 1); ';
getData=getData+'      }';
// When current time is past midnight, after midnight scheduled times becomes today
// and before midnight scheduled times becomes yesterday





getData=getData+'      if (now < schedule){';
getData=getData+'        return "The next " + direction + " train is scheduled for "+childNodes[i].innerHTML+".";';
getData=getData+'        break; ';
getData=getData+'      }';






getData=getData+'  }'; // end of if double hyphen
getData=getData+'}';   // end of for loop
getData=getData+'} ';  // end of function
getData=getData+'GetSchedule();';




let response=await wv.evaluateJavaScript(getData, false);
log("output:"+response);
response = encodeURI(response);
Safari.open("shortcuts://x-callback-url/run-shortcut?name=SpeakScript&input="+response);


