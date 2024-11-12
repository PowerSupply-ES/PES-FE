![sign_logo 1](https://github.com/user-attachments/assets/7dc8270b-f319-410b-b31c-81126a1cf3f4)

# PES (PowerSupply Education System)
</br>
PES 링크 : https://pes23.com/
</br></br></br>

## 📌 목차
[개발 동기](#-개발-동기)</br>
[서비스 소개](#-서비스-소개)</br>
[진행 기간](#-진행-기간)</br>
[사용 기술](#-사용-기술)</br>
[제공 기능](#-제공-기능)</br>
[사용 방법](#-사용-방법)</br>
[팀원 소개](#-팀원-소개)
</br></br></br>

## 🤔 개발 동기
### 동아리 기존 sw 과제 제출 시스템의 불편함을 해소하고자 개발
1. 문제 별 `모아보기 힘든 풀이목록`
2. 소스코드 파일을 그대로 올리거나 파일로 제출하는 형식 -> `코드 확인 과정이 불편`
3. `저조한 재학생의 피드백` -> 참여하는 재학생이 적어 소통이 활성화되지 않음
</br></br></br>

## 🚀 서비스 소개
### PowerSupply 동아리 내 신입생 `SW 교육 시스템`
  - 코딩테스트 채점 웹 프로그램 (C언어)
  - 일반적인 코딩테스트 서비스와 달리, 추가적인 `질문테스트`를 시행함으로서 사용자의 이해도를 높임
  - `신입생`의 코드와 질문답변을 종합하여 `재학생`들은 pass/fail과 comment 제공
  - `신입생`은 pass의 갯수와 문제의 점수를 종합하여 점수 획득
  - 기존의 불편함 해소
    - `문제 별 풀이보기` 제공으로 편리함 제공
    - 자체적인 컴파일러와 Ace.js로 `코드에디터 환경을 그대로 구현`
    - 재학생의 피드백이 필수적인 시스템 + 랭킹 기능 => 재학생들의 `참여율 상승`(문제 당 피드백 개수 0.77개 -> 1.9개로 상승)
    
</br></br></br>

## 🗓 진행 기간
  2023.08 ~ (진행 중)
</br></br></br>

## 🛠 사용 기술
| Category                 | Details                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|--------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Language & Framework** | <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" /> <img src="https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white" /> <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=Java&logoColor=white"> <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=Python&logoColor=white"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white"> |
| **Deployment**           | <img src="https://img.shields.io/badge/GitHub Actions-2088FF?style=for-the-badge&logo=GitHub Actions&logoColor=white"> <img src="https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white">                                                                                                                                                                                               |
| **Build & Library**           | <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white"> <img src="https://img.shields.io/badge/StyledComponents-DB7093?style=for-the-badge&logo=StyledComponents&logoColor=white"> <img src="https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black"> <img src="https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black"> <img src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white">                                                                                                                                                                                             |
| **DB**           | <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=white">                                                                                                                                                      |
| **Collaboration & Design**        | <img src="https://img.shields.io/badge/Notion-F3F3F3.svg?style=for-the-badge&logo=notion&logoColor=black"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/figma-F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" />                                                                                                             |

</br></br></br>

## 🖥 제공 기능
  ### HOME
  ### 로그인/회원가입
  - `jwt`토큰 사용
  ### 코딩문제 풀이 & 채점
  - `Ace.js` 라이브러리 사용하여 코드에디터 구현
  - 자체적인 컴파일러와 테스트 케이스를 이용해 채점
  ### 질문테스트
  - 1개 이상의 pass를 받아야 통과
  ### 문제 별 풀이 열람
  - 문제 통과 신입생, 재학생, 관리자 등급에 한해 접근 가능
  ### 마이페이지
  - 사용자 정보 / 내가 푼 문제 / 내가 남긴 feedback 제공
  ### 랭킹
  - `신입생` : 획득 점수 내림차순
  - `재학생` : 피드백 수 내림차순
  ### 공지사항
  - 업데이트 정보 및 동아리 공지사항 등록
  - `관리자` 등급만 등록, 수정, 삭제 기능 사용 가능
</br></br></br>


## 🧑‍💻 사용 방법
### [ HOME ]
<img src="https://github.com/user-attachments/assets/e329aee8-6446-4462-94d7-aac00191fe29"/>
</br></br>

### [ 로그인 및 회원가입 ]
<img src="https://github.com/user-attachments/assets/d958ac1a-4a8b-4181-a0bc-3deb01436687"/>
<img src="https://github.com/user-attachments/assets/96200cdd-1910-422e-9c07-db01174be503"/></br>

상단바 `로그인` 버튼을 통해 접근</br>
`이름`과 `이메일`은 해당 형식으로만만 입력받음
</br></br>

### [ 문제 리스트 페이지 ]
<img src="https://github.com/user-attachments/assets/31563ce2-7887-42ed-b908-4389a1e2cae4"/>

상단 카카오 에드핏 광고를 통해 수익 창출 중</br>
문제 리스트와 랭킹 제공
</br></br>

### [ 문제 풀이 페이지 ]
<img src="https://github.com/user-attachments/assets/62dec785-91d0-4c91-8ddd-c9e30509bbfb"/>

왼쪽의 문제와 `sample input`, `sample output`을 보고, 적절한 코드를 오른쪽의 `코드 에디터`에 입력

</br></br>
<img src="https://github.com/user-attachments/assets/9c7a17a3-417f-4966-a496-bdde5667a6ff"/>
</br>
오류가 발생 시, `컴파일 에러`인지, `테스트 케이스 불일치`에 의한 것인지 구분하여 메시지 제공</br>
입력코드가 정답일때(Test case에 맞고 컴파일 오류가 나지 않을 시) 질문 테스트 페이지로 이동</br>
</br></br>

### [ 질문 테스트 ]
<img src="https://github.com/user-attachments/assets/600c8e7e-698d-49df-86f8-0ee2e545bc27"/>
</br>
문제 풀이 성공 후, 질문 테스트 시작</br>
우측 질문에 답변을 하면, 문제풀이 종료
</br></br>

### [ 피드백 (재학생 기능) ]
<img src="https://github.com/user-attachments/assets/c11dd746-7a35-4ff0-ae2d-d810d9dc0a81"/>

신입생의 풀이 밑부분에 `pass/fail`을 결정하는 UI</br>
2명의 재학생이 신입생의 풀이에 `comment` 완료 시, 풀이 결과 도출
</br></br>

### [ 문제 풀이 결과 ]
<img src="https://github.com/user-attachments/assets/728693f5-110e-45df-a4a9-159790287bdd"/>

`결과가 pass일 때`

<img src="https://github.com/user-attachments/assets/4e14326e-0e3b-4cc7-b84e-f693bb132617"/>

`결과가 fail일 때`

결과에 따라 바탕색을 변경함으로서 직관적인 UI 제공
</br></br>

### [ 다른 학생들의 풀이보기 ]
<img src="https://github.com/user-attachments/assets/a5a54102-7965-40d5-8aa6-2452be9bb6cf"/>

문제풀이를 완료한 신입생 혹은 관리자, 재학생은 다른 학생의 풀이를 열람 가능
</br></br>

### [ 마이페이지 ]
<img src="https://github.com/PowerSupply-ES/.github/assets/107929413/4bdbff2b-0c34-473a-b4e7-5cf67850caa5" width="300"/>

상단바의 프로필 버튼을 통해 이동 가능</br></br>
<img src="https://github.com/user-attachments/assets/7944e19a-f050-4429-a3af-3693408bd464"/>
</br>
사용자 정보, 푼 문제, 작성한 feedback 열람 가능</br>
feedback이나 문제를 클릭하면 해당 페이지로 이동</br>
</br></br>

### [ 공지사항 ]
<img src="https://github.com/user-attachments/assets/73573c16-2767-496e-af31-5a8fc072dbd2"/>
</br>
관리자 등급에 한해서, 공지사항을 등록, 수정, 삭제 가능
</br></br>

### [ 관리자 페이지 ]
<img src="https://github.com/user-attachments/assets/06ba06e7-be41-405d-afc0-571ea1d88f2d"/>
</br>
관리자 등급에 한해서, 마이페이지를 통해 접근 가능</br>
회원 정보 열람 및 삭제, 등업기능을 사용 가능
</br></br></br>


## 🧑‍🚀 팀원 소개

| <img src="https://avatars.githubusercontent.com/u/45002168?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/127921796?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/117675757?v=4" width="150" height="150"/> | <img src="https://avatars.githubusercontent.com/u/107929413?v=4" width="150" height="150"/> |
|:-------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------------:|
|                                             P&D                                             |                                             BE                                              |                                             FE & BE                                             |                                             FE                                              |
|          박경민<br/>[@123qpq](https://github.com/123qpq)           |                     곽준현<br/>[@JunhyeonKwak](https://github.com/JunhyeonKwak)                     |                  변민정<br/>[@byeon22](https://github.com/byeon22)                   |                      최성임<br/>[@immms](https://github.com/immms)                      |

