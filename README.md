# 🎊Hello! 2025🎊

### 2025년 맞이 모바일 연하장 프로젝트
배포 링크: [https://hello2025.vercel.app/](https://hello2025.vercel.app/)

<br />

![Macbook Pro - Dark Background](https://github.com/user-attachments/assets/ec27cca4-c820-4927-81a1-3693a7fac5b1)

<br/>

# 👨‍👩‍👧‍👦 Our Team 
| 우지영        |    원윤선      |  강민정        |    양성훈      |     김은지     |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| [@zi0w](https://github.com/zi0w) | [@WonYunSun](https://github.com/WonYunSun) | [@cara656513](https://github.com/cara656513)   |    [@yangsunghun](https://github.com/yangsunghun) | [@ej-kimm](https://github.com/ej-kimm)

<br/>

### [📝 프로젝트 노션 바로가기](https://teamsparta.notion.site/ad5c09e574554a4bb40f3464e2749715)

<br/>

# 🕹️ 프로젝트 기능
### 1️⃣ 회원가입 페이지

  
### 2️⃣ SIGNUP
1. signup 프로세스 구성(funnel 활용)
- 프로그래스 바로 시각적 UX 향상
- 세션 스토리지에 입력, 선택한 정보를 저장하여 새로고침해도 기존 입력, 선택값이 남아있음
2. 닉네임 및 약관동의 페이지
- 버튼 disabled 조건으로 닉네임 입력 및 체크박스 필수 선택
- 전체동의 체크박스 선택, 자동해지 기능 구현
- 이용약관 체크박스 선택 시 모달 창 구현
3. 유저 설정 데이터가 supabase 업데이트되어 유저 정보를 저장
4. 미들웨어에서 유저 설정값을 통해 signup 페이지 리다이렉트 설정
  
### 3️⃣ 페이지3


### 4️⃣ 페이지4


### 5️⃣ 페이지5

  
### 6️⃣ 페이지6

<br />

# 🎥 시연 영상

<br />

# 📅 Development Period
2024.12.23 ~ 2024.12.29

<br />

# ⚙️ Tech Stack & Tools ⚙️
<div>
  
### ✔️ Language

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 

### ✔️ Framework & Libraries

<img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white">
<img src="https://img.shields.io/badge/zustand-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white">
<img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white">
<img src="https://img.shields.io/badge/react slick-FF4154?style=for-the-badge&logo=react-slick&logoColor=white">
<img src="https://img.shields.io/badge/react spinners-FF4154?style=for-the-badge&logo=react-spinners&logoColor=white">
<img src="https://img.shields.io/badge/react carousel-FF4154?style=for-the-badge&logo=react-carousel&logoColor=white">
<img src="https://img.shields.io/badge/uuid-FF4154?style=for-the-badge&logo=uuid&logoColor=white">


### ✔️ Hosting & Deployment

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### ✔️ Version Control

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

<br />

# 🌳 프로젝트 구조
```bash
📦src
 ┣ 📂app
 ┃ ┣ 📂(mypage)
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂mymessages
 ┃ ┃ ┣ 📂settings
 ┃ ┃ ┗ 📂unregister
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂decoration
 ┃ ┃ ┣ 📂letters
 ┃ ┃ ┗ 📂myletters
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📂_components
 ┃ ┃ ┣ 📂callback
 ┃ ┣ 📂decoration
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┗ 📂_components
 ┃ ┃ ┃ ┣ 📂envelope
 ┃ ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┣ 📂letter
 ┃ ┃ ┃ ┣ 📂message
 ┃ ┣ 📂letterbox
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┗ 📂_components
 ┃ ┣ 📂signup
 ┃ ┃ ┣ 📂_components
 ┣ 📂assets
 ┃ ┣ 📂fonts
 ┃ ┗ 📂images
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┣ 📂providers
 ┃ ┣ 📂ui
 ┣ 📂constants
 ┣ 📂lib
 ┃ ┣ 📂api
 ┃ ┣ 📂hooks
 ┃ ┣ 📂types
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📂supabase
 ┣ 📂stores
 ┗ 📜middleware.ts
```
