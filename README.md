# PES (PowerSupply Education System)
</br>
PES 웹 url : https://pes23.com/
</br></br></br>

### 📌 목차
[🚀 서비스 소개](#-서비스-소개)</br>
[🗓 진행 기간](#-진행-기간)</br>
[🛠 사용 기술](#-사용-기술)</br>
[🖥️ 제공 기능](#-제공-기능)</br>
[🧑‍💻 사용 방법](#-사용-방법)</br>
[🧑‍🚀 팀 구성원](#-팀-구성원)</br>
</br></br></br>

### 🚀 서비스 소개
  - PowerSupply 동아리 내 신입생 `SW교육 시스템`
  - 코딩테스트 채점 웹 프로그램 (C언어)
  - 기존의 불편한 과제 채점 방식을 개선한 자체적인 서비스
  - 일반적인 코딩테스트 서비스와 달리, 추가적인 `질문테스트`를 시행함으로서 사용자의 이해도를 높임
  - `신입생`의 코드와 질문답변을 종합하여 `재학생`들은 pass/fail와 comment 제공
  - `신입생`은 pass의 갯수와 문제의 점수를 종합하여 점수 획득
  - 랭킹 기능을 통해 이용자들의 참여도 높임
</br></br></br>

### 🗓 진행 기간
  2023.08 ~ (진행 중)
</br></br></br>

### 🛠 사용 기술
<div style="margin: 0 auto; text-align: center;" align= "left">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
  <img src="https://img.shields.io/badge/Javascript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
  <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white">
  <br/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/Amazon AWS-232F3E?style=for-the-badge&logo=Amazon AWS&logoColor=white">
  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white">
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white">
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white">
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">
  <br/>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white">
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white">
  <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white">
  <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white">
</div>
</br></br></br>


### 🖥 제공 기능
- 로그인, 회원가입
  - `jwt`토큰 사용
- 코딩문제 제공 및 채점
  - `react-ace` 라이브러리 사용하여 코드에디터 구현
- 질문테스트 및 pass/fail 부여
- 다른 이용자들의 풀이 제공
- 마이페이지
  - 내가 푼 문제 / 내가 남긴 feedback 제공
- 랭킹 기능
  - 신입생: 점수 내림차순
  - 재학생: 피드백 양 내림차순
- 공지사항
  - 기능 업데이트 혹은 동아리 내 공지사항 등록
  - `관리자` 권한만 등록 가능
</br></br></br>


### 🧑‍💻 사용 방법
- HOME
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/782e70dc-144e-4dd8-a341-eab4ee48c507"  width="840" height="400"/>
</br></br>

- 로그인 및 회원가입
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/e8a630b9-d575-44b1-b9ae-e0a38ce82c0b"  width="840" height="400"/>
</br></br>

- 문제 리스트 페이지
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/e3a96fce-423d-4368-8edb-56631c582d91"  width="840" height="400"/>

상단에 카카오 에드핏 광고를 통해 수익 창출</br>
문제 리스트와 랭킹 제공
</br></br>

- 문제 풀이 페이지
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/5eb64662-ddc3-455b-bc68-0685519fa555"  width="840" height="400"/>

왼쪽의 문제와 sample input, sample output을 보고, 적절한 코드를 오른쪽의 코드 에디터에 입력</br>
</br></br>

- 질문 테스트
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/1d4004ba-b23b-49e1-b289-b5803dc5973f"  width="840" height="400"/>

입력코드가 정답일때(test case에 맞고 컴파일러 오류가 나지 않을 시) 질문 테스트 페이지로 넘어감 </br>
질문테스트에 답변을 하면, 문제풀이 과정이 끝나게 됨
</br></br>

- pass/fail 부여 (재학생 기능)
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/7d90a8c7-dc76-428c-9611-c23c1c3727e3"  width="840" height="400"/>
  
신입생의 풀이 밑부분에 comment와 pass/fail을 결정하는 UI가 있음</br>
2명의 재학생이 신입생의 풀이에 comment를 완료할 시, 풀이 결과가 나오게 됨
</br></br>

- 문제 풀이 결과
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/e1f1afa2-4547-4b60-924b-a33fc96bc584"  width="840" height="400"/>

`결과가 pass일 때`

<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/58c98f01-2593-468f-b4d8-b1db7e443705"  width="840" height="400"/>


`결과가 fail일 때`

결과에 따라 바탕색을 변경함으로서 직관적인 UI를 제공함
</br></br>

- 다른 이용자들의 풀이보기
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/d0b62510-9007-43e3-8ebd-d32cd8af5d5c"  width="840" height="400"/>
  
문제풀이를 완료한 신입생 혹은 관리자, 재학생은 다른 학생의 풀이와 결과를 열람할 수 있음
</br></br>

- 마이페이지(내가 푼 문제/내가 준 feedback)
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/4bdbff2b-0c34-473a-b4e7-5cf67850caa5"  width="260" height="220"/>

우측상단의 Navbar 버튼을 통해 이동가능</br>
</br>
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/812979df-0c8e-4d47-b26a-d8883ca71abd"  width="840" height="400"/>

본인의 정보와 푼 문제, 남긴 feedback정보 열람 가능</br>
feedback이나 문제를 클릭하면 해당 페이지로 이동</br>
</br></br></br>


### 🧑‍🚀 팀 구성원
- 곽준현(BE) : https://github.com/JunhyeonKwak
- 박경민(P&D) : https://github.com/123qpq
- 변민정(FE + BE) : https://github.com/byeon22
- 최성임(FE) : https://github.com/immms

