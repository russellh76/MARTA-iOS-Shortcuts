var mylocation = await Location.current();// 
// log(mylocation);// 
// log(mylocation.longitude);// 
// log(mylocation.latitude);
var stations = {
  E1: {
        MartaStation: " Georgia State ",
        StationURL: "https://itsmarta.com/Georgia-State.aspx",
        StationGPS: "33.75008,-84.38587"
  },
  E2: {
        MartaStation: " King Memorial ",
        StationURL: "https://itsmarta.com/King-Memorial.aspx",
        StationGPS: "33.75001,-84.37544"
  },
  E3: {
        MartaStation: " Inman Park / Reynoldstown ",
        StationURL: "https://itsmarta.com/Inman-Park.aspx",
        StationGPS: "33.75765,-84.35258"
  },
  E4: {
        MartaStation: " Edgewood / Candler Park ",
        StationURL: "https://itsmarta.com/Edgewood-Candler-Park.aspx",
        StationGPS: "33.76196,-84.33961"
  },
  E5: {
        MartaStation: " East Lake ",
        StationURL: "https://itsmarta.com/East-Lake.aspx",
        StationGPS: "33.76195,-84.33964"
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
  E9: {
        MartaStation: " Indian Creek ",
        StationURL: "https://itsmarta.com/Indian-Creek.aspx",
        StationGPS: "33.76981,-84.22965"
  },
  W0: {
        MartaStation: " Five Points ",
        StationURL: "https://itsmarta.com/Five-Points.aspx",
        StationGPS: "33.75392023598456,-84.39162662288796"
  },
  W1: {
        MartaStation: " Dome / G W C C / Philips / C N N ",
        StationURL: "https://itsmarta.com/Omni.aspx",
        StationGPS: "33.75681,-84.39777"
  },
  W2: {
        MartaStation: " Vine City ",
        StationURL: "https://itsmarta.com/Vine-City.aspx",
        StationGPS: "33.75656,-84.40403"
  },
  W3: {
        MartaStation: " Ashby ",
        StationURL: "https://itsmarta.com/Ashby.aspx",
        StationGPS: "33.75628,-84.41697"
  },
  W4: {
        MartaStation: " West Lake ",
        StationURL: "https://itsmarta.com/West-Lake.aspx",
        StationGPS: "33.75328,-84.44543"
  },
  W5: {
        MartaStation: " Hamilton E Holmes ",
        StationURL: "https://itsmarta.com/Hamilton-E-Holmes.aspx",
        StationGPS: "33.75447,-84.47023"
  },
  P4: {
        MartaStation: " Bankhead ",
        StationURL: "https://itsmarta.com/Bankhead.aspx",
        StationGPS: "33.77223,-84.42894"
  },
  S1: {
        MartaStation: " Garnett ",
        StationURL: "https://itsmarta.com/Garnett.aspx",
        StationGPS: "33.7484910142787, -84.39594632329779"
  },
  S2: {
        MartaStation: " West End ",
        StationURL: "https://itsmarta.com/West-End.aspx",
        StationGPS: "33.736036619930154, -84.41367813817436"
  },
  S3: {
        MartaStation: " Oakland City ",
        StationURL: "https://itsmarta.com/Oakland-City.aspx",
        StationGPS: "33.71692936002462, -84.42512787331452"
  },
  S4: {
        MartaStation: " Lakewood / Ft. McPherson ",
        StationURL: "https://itsmarta.com/Lakewood.aspx",
        StationGPS: "33.7005387953148, -84.42951615848011"
  },
  S5: {
        MartaStation: " East Point ",
        StationURL: "https://itsmarta.com/East-Point.aspx",
        StationGPS: "33.67755787021818, -84.4405312672711"
  },
  S6: {
        MartaStation: " College Park ",
        StationURL: "https://itsmarta.com/College-Park.aspx",
        StationGPS: "33.65166248476533, -84.44880100072415"
  },
  S7: {
        MartaStation: " Airport ",
        StationURL: "https://itsmarta.com/Airport.aspx",
        StationGPS: "33.64080453587645,-84.44624731278977"
  },
  N1: {
        MartaStation: " Peachtree Center ",
        StationURL: "https://itsmarta.com/Peachtree-Center.aspx",
        StationGPS: "33.75797266886301, -84.3878131023025"
  },
  N2: {
        MartaStation: " Civic Center ",
        StationURL: "https://itsmarta.com/Civic-Center.aspx",
        StationGPS: "33.766569789581915, -84.38761890099283"
  },
  N3: {
        MartaStation: " North Avenue ",
        StationURL: "https://itsmarta.com/North-Ave.aspx",
        StationGPS: "33.77313,-84.38690"
  },
  N4: {
        MartaStation: " Midtown ",
        StationURL: "https://itsmarta.com/Midtown.aspx",
        StationGPS: "33.7811144283705, -84.38631161382303"
  },
  N5: {
        MartaStation: " Arts Center ",
        StationURL: "https://itsmarta.com/Arts-Center.aspx",
        StationGPS: "33.78923625608165, -84.38727702887373"
  },
  N6: {
        MartaStation: " Lindbergh Center ",
        StationURL: "https://itsmarta.com/Lindbergh.aspx",
        StationGPS: "33.823106342847396, -84.36944144668193"
  },
  N7: {
        MartaStation: " Buckhead ",
        StationURL: "https://itsmarta.com/Buckhead.aspx",
        StationGPS: "33.848799445796175, -84.36836033830365"
  },
  N8: {
        MartaStation: " Medical Center ",
        StationURL: "https://itsmarta.com/Medical-Center.aspx",
        StationGPS: "33.91066582663132, -84.3515712015336"
  },
  N9: {
        MartaStation: " Dunwoody ",
        StationURL: "https://itsmarta.com/Dunwoody.aspx",
        StationGPS: "33.921257306833674, -84.34442045253438"
  },
  N10: {
        MartaStation: " Sandy Springs ",
        StationURL: "https://itsmarta.com/Sandy-Springs.aspx",
        StationGPS: "33.93190113490794, -84.3506936886832"
  },
  N11: {
        MartaStation: " North Springs ",
        StationURL: "https://itsmarta.com/North-Springs.aspx",
        StationGPS: "33.94502750398834, -84.35712289988743"
  },
  NE7: {
        MartaStation: " Lenox ",
        StationURL: "https://itsmarta.com/Lenox.aspx",
        StationGPS: "33.84505206993194, -84.35862848657872"
  },
  NE8: {
        MartaStation: " Brookhaven / Oglethorpe ",
        StationURL: "https://itsmarta.com/Brookhaven.aspx",
        StationGPS: "33.859975208994115, -84.33933304351426"
  },
  NE9: {
        MartaStation: " Chamblee ",
        StationURL: "https://itsmarta.com/Chamblee.aspx",
        StationGPS: "33.88671281400198, -84.30757243995006"
  },
  NE10: {
        MartaStation: " Doraville ",
        StationURL: "https://itsmarta.com/Doraville.aspx",
        StationGPS: "33.90291031759458, -84.2801348729308"
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

