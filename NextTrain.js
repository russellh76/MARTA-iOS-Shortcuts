






var rq = new Request("http://labs.itsmarta.com/signpost/predictions");
var prediction = await rq.loadJSON();
var speak = "";
var west, east, north, south, arrival;
west = new Date("1/1/2200"); 
east = new Date("1/1/2200"); 
south = new Date("1/1/2200"); 
north = new Date("1/1/2200"); 
var station=args.queryParameters.station;

let i = 0;
while (i < prediction.length) {
  if (prediction[i].station.indexOf(station)>-1){
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
speak = encodeURI(speak);
Safari.open("shortcuts://x-callback-url/run-shortcut?name=SpeakScript&input="+speak);




