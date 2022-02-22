## 프로젝트 소개

## Health Guide ChatBot

헬스장 등록 상담을 보조해주는 상담형 챗봇

**[헬스장 소개 / 헬스장 코스 소개 / 등록 상담]**

### 문제점

> 1. 기존 상담 시간 30분~1시간
>    1. **운영자:** 개인 운영 헬스장의 경우 인력이 부족한데 고객 사전정보가 존재 하지 않아 상담에 많은 시간을 소비한다.
>    2. **고객:** 문자, 전화상담의 경우 헬스를 등록하라는 압박이 가해진다.

### 기획(해결방안)

**고객:** 부담없이 사전에 챗봇을 통해 정보를 얻을 수 있다. (챗봇기능 사용)

**운영자:** 사용자가 입력한 정보를 헬스장측에서 종합하여 받을 수 있게하여 고객이 원하는 바를 더 빠르게 파악한다. 상담시간을 감축하여 필요 인력, 소비 시간을 줄일 수 있다. (결과목록 사용)

## 시스템 구조

![Untitled Diagram-Page-1 drawio (2)](https://user-images.githubusercontent.com/89952669/155075098-a746735a-35e3-4a12-9a68-9bda4ab28092.png)


## Frontend

## UX/UI

웹사이트에서 챗봇만 제공하기에는 화면이 너무 텅 비어보여서 어떻게하면 심심하지 않게 웹사이트에 구성 요소들을 채워넣을 수 있을지 고민. 전체적인 틀 작성.

1. Figma를 사용한 웹 페이지, 챗봇 디자인
2. 웹사이트에 사용되는 로고 편집 및 배경 이미지 탐색
3. Coginsight 자체 기능을 이용한 챗봇 내부 UI 색 수정

Frontend 개발 시 생기는 디자인 차이 조정 및 Figma 구현 외적 요소들 검진

Font(Figma): Cutefont / 적용: KOTRA HOPE

[https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDRzg0oUnL0Ll9Se19hqi3d%2FUntitled%3Fnode-id%3D0%253A1](https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FDRzg0oUnL0Ll9Se19hqi3d%2FUntitled%3Fnode-id%3D0%253A1)

## React

담당 : 김승진, 김나은

1. 챗봇 기능 : <iframe> 태그 안에 챗봇 url을 넣어 웹에서 챗봇 기능을 사용 가능하게 구현
    
    ![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%207481b/Untitled%201.png)
    

1. 결과 목록 : coginsight안의 DB(esd)데이터들을 가져오기 위해 api 호출 (axios 사용)
    - api 호출시 header에 api-key 와 domain-id를 입력했는데 오류 발생
        - mindwareworks QnA로 문제해결
    - axios로 api 호출 시 vscode console 안에서는 데이터가 호출되는데 브라우저에서는
    CORS 오류로 데이터 호출에 문제 발생
        - CORS 오류 : 서로다른 출처간의 리소스 전달 할 때 발생
        - 프록시 서버 우회로 문제 해결
        

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%207481b/Untitled%202.png)

1. 페이지네이션
    - 결과 목록에 데이터를 호출하면 모든 데이터들이 리스트로 출력되어 글자가 밖으로 넘치는 현상이 발생하여 페이지네이션을 추가함으로써 해결

![Untitled](%E1%84%8E%E1%85%AC%E1%84%8C%E1%85%A9%E1%86%BC%20%E1%84%87%E1%85%A1%E1%86%AF%E1%84%91%207481b/Untitled%203.png)

- 페이지네이션은 디자인 하기
- UI 다듬기

## Backend

## Monitering

## ChatBot
