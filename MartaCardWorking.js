



    var trips="zero";
    var sentence = "";
    if (document.querySelector("[align=center]")!=null){
      trips=0;
      for (var i=0; i<document.querySelectorAll("[align=center]").length-1; i++){
        trips=trips+parseInt(document.querySelectorAll("[align=center]")[i].innerHTML);
      }
    }


    var cash = document.querySelectorAll("td")[document.querySelectorAll("td").length-9].innerHTML;
    cash=cash.replace("$","");
    var balanceprotected = document.querySelectorAll("b")[0].innerHTML;
    var hotlisted = document.querySelectorAll("b")[1].innerHTML;
    var expiration = document.querySelectorAll("td")[8].innerHTML.replace(/-/g,"/").replace("  : ","");
    
    sentence=sentence+"you have "+ trips +" trips remaining,"
    sentence=sentence+" with a cash value of "+cash+" dollars.";
    sentence=sentence+" "+expiration;


    if (balanceprotected.indexOf("Yes")>-1){
        sentence=sentence+" and is balance protected.";
    }
    else {
        sentence=sentence+" and is NOT balance protected.";
    }


    if (hotlisted.indexOf("Yes")>-1){
        sentence=sentence+" Your card is hot listed.";
    }
    else {
        sentence=sentence+" Your card is not hot listed.";
    }


    sentence=sentence+" You have "+document.getElementsByClassName("Content_normal_black")[document.getElementsByClassName("Content_normal_black").length-1].innerHTML+".";
    
    
    
    console.log("Hi Russell, "+sentence);