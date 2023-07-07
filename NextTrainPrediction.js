// This is code for the scriptable iOS app.
// You can call it from a shortcut by opening URL 
// scriptable:///run?scriptname=NextTrain&station=E6
// note the arguments
// arg station is the station identifier (use GPS if missing)
// arg format specify "r" for relative time, default is absolute
// arg output specify "n" for notification, default is spoken
//
// todo
//   Convert absolute outputs from directional to destination (arrivalsa obj created)
//   import GPS data and code to automatically use the nearest station

var rq = new Request("http://labs.itsmarta.com/signpost/predictions");
var prediction = await rq.loadJSON();
var speak = "";
var west, east, north, south, arrival, dest;
var arrivalsr = {};
var arrivalsa = {};
west = new Date("1/1/2200"); 
east = new Date("1/1/2200"); 
south = new Date("1/1/2200"); 
north = new Date("1/1/2200"); 
if (args.queryParameters.station){
  var station=args.queryParameters.station;
} else {
  var station="E6";
}
if (args.queryParameters.format){
  var format=args.queryParameters.format;
}
if (args.queryParameters.output){
  var outputtype=args.queryParameters.output;
}
let i = 0;
while (i < prediction.length) {
  if (prediction[i].station.indexOf(station)>-1){
    dest = prediction[i].destination;
    if (typeof arrivalsr.dest === 'undefined') {
      arrivalsr[dest] = prediction[i].seconds;
      arrivalsa[dest] = new Date(prediction[i].nextArr);
    } else if (prediction[i].seconds < arrivalsr.dest) {
      arrivalsr[dest] = prediction[i].seconds;
      arrivalsa[dest] = new Date(prediction[i].nextArr);
    }
    if (prediction[i].direction.indexOf("E")>-1){
      arrival = new Date(prediction[i].nextArr);
      if (arrival < east) {
        east = arrival;
      }
    }
    if (prediction[i].direction.indexOf("W")>-1){
      arrival = new Date(prediction[i].nextArr);
      if (arrival < west) {
        west = arrival;
      }
    }
    if (prediction[i].direction.indexOf("S")>-1){
      arrival = new Date(prediction[i].nextArr);
      if (arrival < south) {
        south = arrival;
      }
    }
    if (prediction[i].direction.indexOf("N")>-1){
      arrival = new Date(prediction[i].nextArr);
      if (arrival < north) {
        north = arrival;
      }
    }
  }
  i++;
}
if (south < new Date("1/1/2200")) { 
  speak = speak + " A Southbound train arrives in Decatur at "; 
  if (south.getHours()>12) {
    speak = speak + (south.getHours()-12);
  }
  else {
    speak = speak + south.getHours();
  }
  if (south.getMinutes()<10){
    speak = speak + " O " + south.getMinutes();
  }
  else {
    speak = speak + " " + south.getMinutes();
  }
  if (south.getHours()>11) {
    speak = speak + " pm";
  }
  else {
    speak = speak + " am";
  }
  speak = speak + ".";
}
if (north < new Date("1/1/2200")) { 
  speak = speak + " A Northbound train arrives in Decatur at "; 
  if (north.getHours()>12) {
    speak = speak + (north.getHours()-12);
  }
  else {
    speak = speak + north.getHours();
  }
  if (north.getMinutes()<10){
    speak = speak + " O " + north.getMinutes();
  }
  else {
    speak = speak + " " + north.getMinutes();
  }
  if (north.getHours()>11) {
    speak = speak + " pm";
  }
  else {
    speak = speak + " am";
  }
  speak = speak + ".";
}
if (east < new Date("1/1/2200")) { 
  speak = speak + " An Eastbound train arrives in Decatur at "; 
  if (east.getHours()>12) {
    speak = speak + (east.getHours()-12);
  }
  else {
    speak = speak + east.getHours();
  }
  if (east.getMinutes()<10){
    speak = speak + " O " + east.getMinutes();
  }
  else {
    speak = speak + " " + east.getMinutes();
  }
  if (east.getHours()>11) {
    speak = speak + " pm";
  }
  else {
    speak = speak + " am";
  }
  speak = speak + ".";
}
if (west < new Date("1/1/2200")) { 
  speak = speak + " A Westbound train arrives in Decatur at "; 
  if (west.getHours()>12) {
    speak = speak + (west.getHours()-12);
  }
  else {
    speak = speak + west.getHours();
  }
  if (west.getMinutes()<10){
    speak = speak + " O " + west.getMinutes();
  }
  else {
    speak = speak + " " + west.getMinutes();
  }
  if (west.getHours()>11) {
    speak = speak + " pm";
  }
  else {
    speak = speak + " am";
  }
  speak = speak + ".";
}
if (format == "r") {
  speak = "";
  var count = 0;
  for(var prop in arrivalsr) {
    if(arrivalsr.hasOwnProperty(prop))
      ++count;
  }
  if (count > 0) {
    speak += "For Decatur Station: ";
    for (const key in arrivalsr) {
      var mins = Math.round(arrivalsr[key]/60)
      speak += "The next train to "+ key + " arrives in " + mins + " minute";
      if (mins > 1) {
        speak += "s";
      }
      speak += ". ";
    }
  } else {
    speak = "No arrival data for Decatur Station."
  }
}

if (outputtype == "n") {
  n = new Notification();
  n.title = "Next train";
  n.body = speak;
  n.schedule();
} else {
  speak = encodeURI(speak);
  Safari.open("shortcuts://x-callback-url/run-shortcut?name=SpeakScript&input="+speak);
}
