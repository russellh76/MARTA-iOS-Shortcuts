var card=args.queryParameters.card;
var name=args.queryParameters.name;
var js="";
var sentence="";

if (name==undefined){
  name="Russell";
}
if (card==undefined){
  card="Dummy"; //default card value, don't commit with value
}

var url="https://balance.breezecard.com/breezeWeb/cardnumber_qa.do?submitButton.x=0&submitButton.y=0&cardnumber=";
url=url+card;
let wv=new WebView();
await wv.loadURL(url, true);

// build function
js='function get(){ return document.querySelectorAll("b")[0].innerHTML;} get();';
let balanceProtect=await wv.evaluateJavaScript(js, false);

js='function get(){ return document.querySelectorAll("b")[2].innerHTML;} get();';
let hotListed=await wv.evaluateJavaScript(js, false);

js='function get(){ return document.querySelectorAll("td")[8].innerHTML;} get();';
let expiration=await wv.evaluateJavaScript(js, false);
expiration=expiration.replace(/-/g,"/").replace("  : ","");

js='function get(){ return document.querySelectorAll("td")[document.querySelectorAll("td").length-9].innerHTML;} get();';
let cash=await wv.evaluateJavaScript(js, false);
cash=cash.replace("$","");
cash=cash.replace("0.00","zero");

js='function get(){ return document.getElementsByClassName("Content_normal_black")[document.getElementsByClassName("Content_normal_black").length-1].innerHTML;} get();';
let pending=await wv.evaluateJavaScript(js, false);

js='function get(){ var trips="zero"; if(document.querySelector("[align=center]")!=null){ trips=0; for(var i=0; i<document.querySelectorAll("[align=center]").length-1; i++){ trips=trips+parseInt(document.querySelectorAll("[align=center]")[i].innerHTML); } } return trips; } get();';
let trips=await wv.evaluateJavaScript(js, false);

log("balanceProtect:"+balanceProtect);
log("hotListed:"+hotListed);
log("cash:"+cash);
log("expiration:"+expiration);
log("pending:"+pending);
log("trips:"+trips);

sentence=sentence+"Hi "+name+", you have "+trips+" trips remaining, with a cash value of "+cash+" dollars. "+expiration;

if (balanceProtect.indexOf("Yes")>-1){
  sentence=sentence+" and is balance protected.";
}
if (balanceProtect.indexOf("No")>-1){
  sentence=sentence+" and is Not balance protected.";
}

if (hotListed.indexOf("Yes")>-1){
  sentence=sentence+" Your card is hot listed.";
}
if (hotListed.indexOf("No")>-1){
  sentence=sentence+" Your card is not hot listed.";
}

log(sentence);
Safari.open("shortcuts://x-callback-url/run-shortcut?name=SpeakScript&input="+encodeURI(sentence));

