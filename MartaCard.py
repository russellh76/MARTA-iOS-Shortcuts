// This is code for the pythonista iOS app.
// You can call it from a shortcut by opening URL 
// pythonista:///MartaCard.py&argv=12341234123412341234&argv=Russell
// note the arguments



import urllib, bs4, requests, sys, webbrowser, console
console.clear()
def get_beautiful_soup(url):
    return bs4.BeautifulSoup(requests.get(url).text,'html5lib')
soup=get_beautiful_soup('https://balance.breezecard.com/breezeWeb/cardnumber_qa.do?submitButton.x=0&submitButton.y=0&cardnumber='+str(sys.argv[1]))
trips=str(soup.find('div',attrs={"align":"center"}).text).strip(" ")
s="Hi "+str(sys.argv[2])+", you have "+trips+" trips remaining, "
if not trips:
	s="Hi "+str(sys.argv[2])+", you have zero trips remaining, "
s=s+" with a cash value of "+str(soup.find_all('td')[18].text)
s=s+".  "+str(soup.find_all('td',attrs={"class":"Content_bold"})[1].text).replace('-','/').replace('  : ','')
if str(soup.find('b').text)=='Yes ':
  s=s+' and is Balance Protected.'
else:
	s=s+' and is NOT Balance Protected.'
if str(soup.findAll('b')[2].text)=='No':
  s=s+'  Your card is not hot listed.'
else:
	s=s+'  Your card is hot listed.'
s=s+" You have "+str(soup.find_all('td',attrs={"class":"Content_normal_black"})[3].text)+".  Would you like to view your account on the web?"+'_'+str(sys.argv[1])
webbrowser.open('shortcuts://x-callback-url/run-shortcut?name=SpeakMarta&input='+urllib.parse.quote(s))






