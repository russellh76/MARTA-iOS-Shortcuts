var mylocation = await Location.current();// 
// log(mylocation);// 
// log(mylocation.longitude);// 
// log(mylocation.latitude);
var stations = {
  E1: {
        MartaStation: "Georgia State ",
        StationURL: "https://itsmarta.com/Georgia-State.aspx",
        StationGPS: ""
  },
  E4: {
        MartaStation: " Edgewood / Candler Park ",
        StationURL: "https://itsmarta.com/Edgewood-Candler-Park.aspx",
        StationGPS: "33.76196,-84.33961"
  },
  E6: {
        MartaStation: " Decatur ",
        StationURL: "https://itsmarta.com/Decatur.aspx",
        StationGPS: "33.77462519237718,-84.29615194824973"
  },
  E7: {
        MartaStation: " Avondale ",
        StationURL: "https://itsmarta.com/Avondale.aspx",
        StationGPS: "33.77519,-84.28214"
  },
  E8: {
        MartaStation: " Kensington ",
        StationURL: "https://itsmarta.com/Kensington.aspx",
        StationGPS: "33.77265,-84.25205"
  },
  W0: {
        MartaStation: " Five Points ",
        StationURL: "https://itsmarta.com/Five-Points.aspx",
        StationGPS: "33.75392023598456,-84.39162662288796"
  },
  S7: {
        MartaStation: " Airport ",
        StationURL: "https://itsmarta.com/Airport.aspx",
        StationGPS: "33.64080453587645,-84.44624731278977"
  },
  N3: {
        MartaStation: " North Avenue ",
        StationURL: "https://itsmarta.com/North-Ave.aspx",
        StationGPS: "33.77313,-84.38690"
  }
}
// log(stations);
var closest="";
var shortest=9999;
for (station in stations) {
//   log(station)
  if (stations[station].StationGPS != "") {
    var mycoords = stations[station].StationGPS.split(",",2);
//     log(mycoords);
    var mydist = getDistanceFromLatLonInKm(mylocation.latitude,mylocation.longitude,mycoords[0],mycoords[1]);
    log(stations[station].MartaStation+mydist);
    if (mydist < shortest) {
      shortest = mydist;
      closest = station;
    }
  }
}
log("Closest station: "+closest+stations[closest].MartaStation);

function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}
