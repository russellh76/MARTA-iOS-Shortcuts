




var card=args.queryParameters.card;
var name=args.queryParameters.name;
var url="https://balance.breezecard.com/breezeWeb/cardnumber_qa.do?submitButton.x=0&submitButton.y=0&cardnumber=";
url=url+card;
let wv=new WebView();
await wv.loadURL(url, true);

// build function
var getData=' function getCard(){';
getData=getData+'    var trips="zero";';
getData=getData+'    var sentence = "";';
getData=getData+'    if (document.querySelector("[align=center]")!=null){';
getData=getData+'      trips=0;';
getData=getData+'      for (var i=0; i<document.querySelectorAll("[align=center]").length-1; i++){';
getData=getData+'        trips=trips+parseInt(document.querySelectorAll("[align=center]")[i].innerHTML);';
getData=getData+'      }';
getData=getData+'    }';


getData=getData+'    var cash = document.querySelectorAll("td")[document.querySelectorAll("td").length-9].innerHTML;';
getData=getData+'    cash=cash.replace("$","");';
getData=getData+'    var balanceprotected = document.querySelectorAll("b")[0].innerHTML;';
getData=getData+'    var hotlisted = document.querySelectorAll("b)[1].innerHTML;';
getData=getData+'    var expiration = document.querySelectorAll("td")[8].innerHTML.replace(/-/g,"/").replace("  : ","");';


getData=getData+'    sentence=sentence+"you have "+ trips +" trips remaining,"';



getData=getData+'    sentence=sentence+" with a cash value of "+cash+" dollars.";';
getData=getData+'    sentence=sentence+" "+expiration;';


getData=getData+'    if (balanceprotected.indexOf("Yes")>-1){';
getData=getData+'        sentence=sentence+" and is balance protected.";';
getData=getData+'    }';
getData=getData+'    else {';
getData=getData+'        sentence=sentence+" and is NOT balance protected.";';
getData=getData+'    }';


getData=getData+'    if (hotlisted.indexOf("Yes")>-1){';
getData=getData+'        sentence=sentence+" Your card is hot listed.";';
getData=getData+'    }';
getData=getData+'    else {';
getData=getData+'        sentence=sentence+" Your card is not hot listed.";';
getData=getData+'    }';


getData=getData+'    sentence=sentence+" You have "+document.getElementsByClassName("Content_normal_black")[document.getElementsByClassName("Content_normal_black").length-1].innerHTML+".";';
getData=getData+'    return sentence;';
getData=getData+'}';
getData=getData+'getCard();';



let response=await wv.evaluateJavaScript(getData, false);
log("output:"+response);
response = encodeURI("Hi, "+name+" "+response);
Safari.open("shortcuts://x-callback-url/run-shortcut?name=SpeakScript&input="+response);





