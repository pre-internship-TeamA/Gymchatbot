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
## Frontend
### React
>
> 1. 챗봇 기능 : <iframe> 태그 안에 챗봇 url을 넣어 웹에서 챗봇 기능을 사용 가능하게 구현
> coginsight의 DB(esd)데이터들과 Backend의 데이터를 가져오기 위해 api 호출 (axios 사용)
>    - api 호출시 header에 api-key 와 domain-id를 입력(외부 api 호출에 필요한 키)
>    - axios로 api 호출 시 vscode console 안에서는 데이터가 호출되는데 브라우저에서는 CORS 오류로 데이터 호출에 문제 발생
>        - CORS 오류 : 서로다른 출처간의 리소스 전달 할 때 발생
>        - nginx config 파일에서 add_header 
>        
>
>
## Backend

## Monitering

## ChatBot
  
## Tech Stack
  Frontend : Reack
  Web Server : Nginx
  WSGI : Gunicorn
  Backend : Flask
  DataBase : MongoDB
  
  
  🧿 PORTS
Name	Port	Description
Nginx	80	가벼움과 높은 성능을 목표로 하는 웹서버로 서버로서의 역할과 프록시로서의 역할을 수행합니다.
React(on Nginx)	80, 3000	학습 문제의 이미지를 업로드 방식으로 등록하면, 해당 문제의 문항내용, 보기, 선지를 분류하여 텍스트 및 이미지로 저장할 수 있는 UI를 제공합니다.
Flask + Gunicorn	8000, 5000	QUIZRIX의 서버. 모든 행동의 중심에 위치하여 웹서버, Cloud Storage, DB 간의 소통을 담당합니다.
Mongo DB	27017	Database
Grafana	3001	cAdvisor, Prometheus, NodeExporter를 통해 전달받은 시간별 매트릭 데이터를 시각화하여 대시보드로 제공해줍니다.
cAdvisor	8080	사용중인 도커 컨테이너의 리소스 사용량을 측정하여 시계열 매트릭 데이터화합니다.
Prometheus	9090	cAdvisor, node exporter의 시계열 매트릭 데이터를 수집하여 시스템 모니터링 및 경고합니다.
Node Exporter	9100	서버의 cpu, 메모리, 디스크, 네트워크 사용량등 호스트 관련 매트릭 데이터를 수집하여 api로 노출시킵니다.
