# 코드잇 스프린트 5기 파트3 7팀

## 목차
[1. The Julge](#-the-julge)

[2. 배포 링크](#-배포-링크)

[3. 개발 기간](#-개발-기간)

[4. 기술 목표](#-기술-목표)

[5. 팀원 소개](#-팀원-소개)

[6. 기술 스택](#-기술-스택)

[7. UserFlow](#-userflow)

[8. 주요 기능](#-주요-기능)

<br><br>
## 🧑‍🍳 The Julge
![Desktop](https://github.com/jose0229/the-julge/assets/109906670/43c44751-5d1c-48cf-ad2c-1c71edb5f2fa)
The Julge는 급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스입니다.

<br><br>
## 🔗 배포 링크
> [The Julge](https://main--the-julge-5-7.netlify.app/notice-list)

<br><br>
## 📅 개발 기간
> 2024 / 5 / 30 (목) ~ 6 / 18 (화)

<br><br>
## 🚩 기술 목표

### 사용자 친화적인 인터페이스 제공
> Next.js와 Tailwind CSS를 사용하여 반응형 웹 디자인을 구현해 직관적이고 반응이 빠른 사용자 인터페이스를 제공하여 사용자가 공고를 쉽게 탐색하고 지원할 수 있도록 합니다.

### 효율적인 데이터 관리
> Context API를 활용하여 전역 상태를 관리하고, 로컬 스토리지를 사용하여 최근 본 공고와 같은 데이터를 저장해 공고 데이터와 사용자 데이터를 효율적으로 관리하고, 필요한 데이터를 빠르게 로드할 수 있도록 합니다.

### 신뢰성 있는 데이터 통신
> Axios를 사용하여 API 호출을 처리하고, 필요한 데이터는 클라이언트 측에서 비동기적으로 로드합니다. 또한, 오류 처리를 통해 사용자가 오류 상황에서도 원활하게 사용할 수 있도록 합니다.

### 보안 및 인증 관리
> JWT(JSON Web Token)를 사용하여 사용자 인증을 처리하고, 민감한 데이터는 로컬 스토리지나 쿠키를 통해 안전하게 저장해 안전한 서비스를 제공합니다.

### 유연한 확장성
> 프로젝트가 성장함에 따라 기능을 확장하고 유지 보수할 수 있도록 유연한 아키텍처를 설계합니다.

<br><br>
## 🧑‍🤝‍🧑 팀원 소개

|[김현서](https://github.com/hyunseo11)|[박준영](https://github.com/JunYoungee)|[이유진](https://github.com/newjinlee)|[임상훈](https://github.com/jose0229)|[전유민](https://github.com/JeonYumin94)|
|----|----|----|----|----|
|<img src="https://github.com/jose0229/the-julge/assets/109906670/4c2ae408-83cf-4010-a4f5-6c2825612cbe.png" height="120"/>|<img src="https://github.com/jose0229/the-julge/assets/109906670/296b74f1-b752-43af-b350-e8dbdad27185.png" height="120"/>|<img src="https://github.com/jose0229/the-julge/assets/109906670/c0908c56-ff86-47b5-b35c-1513f83a456b.png" height="120"/>|<img src="https://github.com/jose0229/the-julge/assets/109906670/0a0d04ab-313b-49e8-b73b-d6f595df25ec.png" height="120"/>|<img src="https://github.com/jose0229/the-julge/assets/109906670/86ab5964-47c8-407b-8e80-97c413c532fe.png" height="120"/>|

<br><br>
## ⚒️ 기술 스택

**- Framework**

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

**- Programming Language** 

<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> 

**- CSS** 

<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> 

**- State Management Library** 

<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 

**- Version Control** 

<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> 

**- Design** 

<img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"> 

**- Communication** 

<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">

[협업 과정 확인하기](https://typhoon-need-dad.notion.site/e9ffedec95e04d3e9618407a3274b364?v=339c3c0e53524f0e87f662e0cec4a083&pvs=74) 

**- Others** 

<img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> 

<br><br>
## 🗺️ UserFlow
<details>
<summary> UserFlow 확인하기 </summary><br>
<img src="https://github.com/jose0229/the-julge/assets/109906670/82dd3612-7fad-4f85-a03c-1699894a3c05.png" width="800"/></details>

<br><br>
## 💻 주요 기능
<details>
  <summary>주요 기능 확인하기</summary>
  
  ### 상단 네비게이션바

- 사장님 이메일로 로그인하면 오른쪽 상단은 '내 가게' 버튼, 알바님 이메일로 로그인하면 오른쪽 상단에 '내 프로필' 버튼 생성
- 오른쪽 '내 프로필' 버튼을 누르면 내 프로필 페이지로 이동
- '로그아웃' 버튼을 클릭하면 공고 리스트 페이지로 이동
- '알람' 버튼을 클릭하면 나에게 온 알림 확인
- 검색창에서 검색어를 입력하고 '엔터키'를 누르면 가게 이름에 검색어가 포함된 공고만 보여줌

### 로그인 페이지

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '회원가입하기' 버튼을 클릭하면 회원가입 페이지로 이동
- 유효한 이메일과 비밀번호를 입력하고 '로그인' 버튼을 클릭하면 공고 리스트 페이지로 이동
- 로그인 페이지에는 네비게이션바가 없음
- 비밀번호가 틀릴 경우 “비밀번호가 일치하지 않습니다.” 경고 창을 보여줌
- 이메일 input에서 focus out 일 때, 값이 이메일 형식이 아닐 경우 input에 빨강색 테두리와 아래에 “이메일 형식으로 작성해 주세요.” 빨강색 에러 메시지 표시
- 비밀번호 input에서 focus out 일 때, 비밀번호 길이가 8자 미만일때 input에 빨강색 테두리와 아래에 “8자 이상 작성해 주세요.” 빨강색 에러 메시지 표시
- 로그인 성공 시 엑세스 토큰 발급

### 회원가입 페이지

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '로그인하기' 버튼을 클릭하면 로그인 페이지로 이동
- 이메일 input에서 focus out 일 때, 값이 이메일 형식이 아닐 경우 이메일 input에 빨강색 테두리와 아래에 “이메일 형식으로 작성해 주세요.” 빨강색 에러 메시지 표시
- 비밀번호 input에서 focus out 일 때 비밀번호 input 값 길이가 8자 이상이 아닐 경우 비밀번호 input에 빨강색 테두리와 아래에 “8자 이상 입력해주세요.” 빨강색 에러 메시지 표시
- 비밀번호 확인 input에서 focus out 일 때 비밀번호 input 값과 비밀번호 확인 input 값이 다를 경우 비밀번호 확인 input에 빨강색 테두리와 아래에 “비밀번호가 일치하지 않습니다.” 빨강색 에러 메시지 표시
- 중복되는 이메일로 회원가입 시도 시 '이미 사용 중인 이메일입니다' 모달창 표시
- 활성화된 '가입하기' 버튼을 누르면 “가입이 완료되었습니다” alert 창을 보여주고 로그인 페이지로 이동

### 사장님 (내 가게)

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- 내 가게 개수는 1개로 한정
- '가게 등록하기' 버튼 클릭 시 가게 정보 등록 페이지로 이동

### 사장님 (가게 정보 등록)

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '등록하기' 버튼을 클릭하면 가게 등록이 완료되고 “등록이 완료되었습니다.” alert 창 표시
- '확인' 버튼을 누르면 가게 정보 상세 페이지로 이동
- 주소 영역은 input으로 진행하거나 분류와 동일한 드롭다운으로 진행 가능
- 주소 제한
    - “서울시 종로구 | 서울시 중구 | 서울시 용산구 | 서울시 성동구 | 서울시 광진구 | 서울시 동대문구 | 서울시 중랑구 | 서울시 성북구 | 서울시 강북구 | 서울시 도봉구 | 서울시 노원구 | 서울시 은평구 | 서울시 서대문구 | 서울시 마포구 | 서울시 양천구 | 서울시 강서구 | 서울시 구로구 | 서울시 금천구 | 서울시 영등포구 | 서울시 동작구 | 서울시 관악구 | 서울시 서초구 | 서울시 강남구 | 서울시 송파구 | 서울시 강동구”로 제한
- 분류 선택지 제한
    - “한식 | 중식 | 일식 | 양식 | 분식 | 카페 | 편의점 | 기타” 중 선택 가능

### 사장님 (가게 정보 편집)

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '완료' 버튼 클릭 시 가게 정보 수정이 완료되고 “수정이 완료되었습니다.” alert 창 표시

### 사장님 (가게 정보 상세)

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '편집하기' 버튼을 누르면 가게 정보 편집하기 페이지로 이동
- '공고 등록하기' 버튼을 클릭하면 공고 등록하기 페이지로 이동

### 사장님 (공고 등록)

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '등록하기' 버튼을 누르면 공고가 등록되고 '등록이 완료되었습니다.' alert 창 표시
- '확인' 버튼을 누르면 공고 상세 페이지로 이동

### 사장님 (공고 상세)

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '공고 편집하기' 버튼을 누르면 공고 편집하기 페이지로 이동
- '거절하기' 버튼을 클릭하면 alert 창이 뜨고 신청 거절
- '승인하기' 버튼을 클릭하면 alert 창이 뜨고 신청 승인

### 알바님 (내 프로필 상세)

- '내 프로필 등록하기' 버튼을 클릭하면 내 프로필 등록하기 페이지로 이동
- '편집하기' 버튼을 클릭하여 내 프로필 수정 가능
- '공고 보러가기' 버튼을 누르면 공고 리스트 페이지로 이동
- 신청 내역이 없다면 공고 보러가기 버튼 표시
- 신청 내역이 있다면 결과를 페이지네이션으로 표시
- 오른쪽 상단 '알림' 버튼을 누르면 신청 결과 확인

### 알바님 (내 프로필 등록)

- '등록하기' 버튼을 누르면 “등록이 완료되었습니다.” alert 창 표시
- '확인' 버튼을 누르면 프로필 등록 완료

### 공고 리스트

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- 공고 카드를 클릭하면 해당 공고 상세 페이지로 이동
- 맞춤 공고는 주소를 기준으로 설정
- 공고 정렬 기준은 마감임박순, 시급 많은 순, 시간 적은 순, 가나다순으로 설정
- 전체 공고는 페이지네이션으로 구현
- 상세 필터
    - 상세 필터 괄호 안의 숫자는 위치에서 선택한 개수 + 시작일 설정 유무 + 금액 설정 유무
    - '적용하기' 버튼을 누르면 선택한 필터 적용
    - '초기화' 버튼을 누르면 선택한 필터 내용 초기화

### 공고 상세

- '로고 버튼'을 클릭하면 공고 리스트 페이지로 이동
- '신청하기' 버튼을 누르면 프로필 등록이 되어있지 않을 경우 ”내 프로필을 먼저 등록해 주세요.” alert 창 표시 후 '확인' 버튼 클릭 시 프로필 등록 페이지로 이동
- '신청하기' 버튼을 누르면 프로필 등록이 되어있을 경우 신청 완료
- 이미 신청한 공고에서 '취소하기' 버튼 클릭 시 “신청을 취소하시겠어요?” alert 창 표시 후 '취소하기' 버튼 클릭 시 지원 취소 후 '신청하기' 버튼으로 변경
- 공고 타입
    - 구인하지 못했지만, 공고 기간이 지난 경우 지난 공고로 설정
    - 지정한 구인이 모집 완료된 경우 마감 완료로 설정
- 최근에 본 공고
    - 최신 순으로 최대 6개까지 표시
    - 6개를 초과할 경우 가장 과거의 공고 미표시
    - 최근에 본 공고를 위한 별도 API는 없으며, 브라우저 저장소 활용
</details>

<div align="right">
  
  [목차로 이동](#목차)
  
</div>
