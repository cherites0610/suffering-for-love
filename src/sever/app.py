import requests
from flask import Flask
import re
from bs4 import BeautifulSoup
import json
from flask_cors import CORS

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

@app.route("/getAllIPInf")
def getAllPInf():
    header = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    }
    params= { 'limit':'200' }
    url = 'https://data.taipei/api/v1/dataset/9267a378-744e-4a46-ac6c-aacc277402b4?scope=resourceAquire'
    web = requests.get(url, headers=header, params=params)  # 取得網頁內容
    
    # 使用正則表達式替換 '地址' 為 'address'
    modified_text = re.sub(r'地址', 'address', web.text)
    modified_text = re.sub(r'機構名稱', 'name', modified_text)
    modified_text = re.sub(r'電話', 'phone', modified_text)

    return modified_text