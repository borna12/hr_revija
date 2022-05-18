import io
from bs4 import BeautifulSoup
import json





fajl = io.open("indeks65.html", mode='r',  encoding="utf-8")
soup = BeautifulSoup(fajl, 'html.parser')
ul = soup.find("ul")
podatci=[]
for li in ul.find_all("a"):
  podatak={'title' : li.text,'contant':li.text,'url': li['href']}
  podatci.append(podatak)

json_object=json.dumps(podatci, indent = 4)

with io.open('trazilica.json', mode='w',  encoding="utf-8") as outfile:
  outfile.write(json_object)

