from flask import Flask, jsonify, request
import os
from pymongo import MongoClient
import requests
from bs4 import BeautifulSoup
from bson import ObjectId
import json

app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False
client1 = MongoClient("mongodb+srv://gym123:gym123@cluster0.wfwbi.mongodb.net/gymdb?retryWrites=true&w=majority")
db1 = client1.gymdb

# db1.gymtb.drop()
# 타겟 URL을 읽어서 HTML를 받아오고
# headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('http://hqcenter.snu.ac.kr/archives/jiphyunjeon/%EC%95%BD%EC%9D%B4-%EB%90%98%EB%8A%94-%EC%9A%B4%EB%8F%99-%ED%95%B4%EA%B0%80-%EB%90%98%EB%8A%94-%EC%9A%B4%EB%8F%99-2')
# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 파싱 : 어떤 웹 페이지에서 내가 원하는 데이터를 특정 패턴이나 순서로 추출하여 정보로 가공하는 것
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.content.decode('utf-8' , 'replace'), 'html.parser')
#-------------------------------------스크래핑-------------------------------------------
# ex = ""
# detail = ""
# for i in range(14):
#     if (i%2==0):
#         ex = soup.select_one('#post-1719 > div.entry-content > h2:nth-child('+str(i+2)+')')
#         if ex is not None:
#             sub = ex.text
#     else:
#         ex = soup.select_one('#post-1719 > div.entry-content > p:nth-child('+str(i+2)+')')
#         if (i == 5 or i == 7 or i == 11 or i == 13):
#             detail = ""
#         detail += ex.text
#     if (i == 3 or i == 5 or i == 9 or i == 11 or i == 13):
#         doc = {'sub': sub , 'detail' : detail}
#         db1.gymtb.insert_one(doc)
#-------------------------------------------------------------------------------
@app.route('/',methods=["GET","POST"])
def getpost():
    if request.method == "GET":
        o =[]
        for i in db1.gymtb.find():
            o.append({"_ID":str(ObjectId(i["_id"])),"sub":i["sub"],"detail":i["detail"]})
        return jsonify(o)
@app.route('/gym')
def ping_server():
    abc = db1.gymtb.find()
    aaa = [a["sub"]+" "+a["detail"]  for a in abc]
    return jsonify({"sub" : aaa})
# @app.route('/animals')
# def get_stored_animals():
#     _animals = db.animal_tb.find()
#     animals = [{"name" : animal["name"]} for animal in _animals]
#     return jsonify({"animals": animals})
if __name__=='__main__':
    app.run(host="0.0.0.0", port=5000, debug=True)
