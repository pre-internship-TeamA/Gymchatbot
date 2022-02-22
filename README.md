# 프로젝트 소개

## Health Guide ChatBot

> 헬스장 등록 상담을 보조해주는 상담형 챗봇
>
>**[헬스장 소개 / 헬스장 코스 소개 / 등록 상담]**

### 문제점
>
> 1. 기존 상담 시간 30분~1시간
>    1. **운영자:** 개인 운영 헬스장의 경우 인력이 부족한데 고객 사전정보가 존재 하지 않아 상담에 많은 시간을 소비한다.
>    2. **고객:** 문자, 전화상담의 경우 헬스를 등록하라는 압박이 가해진다.
>
### 기획(해결방안)
>
>**고객:** 부담없이 사전에 챗봇을 통해 정보를 얻을 수 있다. (챗봇기능 사용)
>
>**운영자:** 사용자가 입력한 정보를 헬스장측에서 종합하여 받을 수 있게하여 고객이 원하는 바를 더 빠르게 파악한다. 상담시간을 감축하여 필요 인력, 소비 시간을 줄일 수 있다. (결과목록 사용)
>
## 시스템 구조
>
>![Untitled Diagram-Page-1 drawio (2)](https://user-images.githubusercontent.com/89952669/155075098-a746735a-35e3-4a12-9a68-9bda4ab28092.png)
>
>
 
## Tech Stack
  ```
  Frontend : React
  Web Server : Nginx
  WSGI : Gunicorn
  Backend : Flask
  DataBase : MongoDB
  Monitoring : CAdvisor, Prometheus, Grafana, Node-Expoter
  ```
## Port
  >|Name|Port|Description|
  >|-------|------|--------------------------|
  >|Nginx|80|
  >|Frontend|3000|
  >|Backend|5000|
  >|CAdvisor|8080|
  >|Prometheus|9090|
  >|Grafana|3002|
  >|Node-Expoter|9100|
 
  
## Github
  Clone Repository
  ```
  git clone https://github.com/pre-internship-TeamA/Gymchatbot.git
  ```
## Docker
 + Docker-compose.yml 파일 실행
  ```
  Docker-compose up --build
  ```
 + Docker-compose-prod.yml 파일 실행
  ```
  Docker-compose -f Docker-compose-prod.yml up --build
  ```
  
  
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Nginx-green?style=plastic&logoColor=white"/>
  <img src="https://img.shields.io/badge/Scss-green?style=flat&logo=Sass&logoColor=CC6699"/>
  <img src="https://img.shields.io/badge/MongoDB-yellow?style=plastic&logo=appveyor&logoColor=blue"/>
