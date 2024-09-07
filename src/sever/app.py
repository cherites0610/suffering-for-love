import requests
from flask import Flask
import numpy as np 
import requests
from bs4 import BeautifulSoup
import json
from flask_cors import CORS

                                # 印出 title ( 台灣水庫即時水情 )

app = Flask(__name__)
CORS(app)
@app.route("/getAll")
def hello():
    url = 'https://mental-health.gov.taipei/News.aspx?n=FAB9374F6BCE2D48&sms=EEA94C26A90DD864'
    web = requests.get(url)                        # 取得網頁內容
    soup = BeautifulSoup(web.text, "html.parser")  # 轉換成標籤樹
    soup = soup.find('tbody');                     # 取得 title
    temp = soup.find_all('tr');
    
    data = []
    id = 0
    
    for item in temp:
        title = item.find_all('td')[1].text.strip()  # 提取第一個 td 並去除空白
        date = item.find_all('td')[2].text.strip()   # 提取第二個 td 並去除空白
        url = item.find_all('td')[1].find('a')
        data.append({
        "_id": id,
        "title": title,
        "date": date,
        'url': 'https://mental-health.gov.taipei/'+url['href']
        })
        id=id+1
        
    json_data = json.dumps(data, ensure_ascii=False, indent=4)
    return json_data

