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
## Ports
 >|Name|Port|Description|
>  |Nginx|80|가벼움과 높은 성능을 목표로 하는 웹서버로 서버로서의 역할과 프록시로서의 역할을 수행|
>  |Frontend|3000|React를 사용하여 사용자 인터페이스를 제공하고 외부api와 Backend api를 받아 화면에 전달|
>  |Backend|5000|Flask를 사용하여 Frontend에 필요한 데이터를 크롤링하고 DB저장후 api방식으로 데이터 전달|
>  |CAdvisor|8080|사용중인 도커 컨테이너 리소스 사용량을 측정하여 데이터화|
>  |Prometheus|9090|CAdvisor, Node-Expoter의 데이터들을 수집하여 모니터링|
>  |Grafana|3002|Prometheus에서 받아온 데이터들을 시각화하여 대시보드를 제공|
>  |Node-Expoter|9100|CPU, 메모리 사용량 등 호스트 관련 데이터를 수집|
 
  
## Github
> + Clone Repository
>  ```
>  git clone https://github.com/pre-internship-TeamA/Gymchatbot.git
>  ```
 ## Docker
>  + Docker-compose.yml 파일 실행(개발용)
>  ```
>  Docker-compose up --build
>  ```
>  + Docker-compose-prod.yml 파일 실행 (배포용)
>  ```
>  Docker-compose -f Docker-compose-prod.yml up --build
>  ```
  
## Frontend
>  + React 개발용 npm 버전으로 실행
>  ```
>  npm start
>  ```

## Nginx
>  + Frontend
>  ```
>  http://localhost:80
>  ```
>  + Backend
>  ```
>  http://localhost:5000
>  ```
>  + Grafana
>  ```
>  http://localhost:3002
>  ```
>  + CAdvisor
>  ```
>  http://localhost:8080
>  ```
>  + Node-Expoter
>  ```
>  http://localhost:9100
>  ```
>  + Prometheus
>  ```
>  http://localhost:9090
>  ```

  
  
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Nginx-green?style=plastic&logoColor=white"/>
  <img src="https://img.shields.io/badge/Scss-green?style=flat&logo=Sass&logoColor=CC6699"/>
  <img src="https://img.shields.io/badge/MongoDB-yellow?style=plastic&logo=appveyor&logoColor=blue"/>
