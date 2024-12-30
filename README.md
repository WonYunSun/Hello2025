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
- 👥 소셜 로그인 (Google, Kakao, Github)
  - OAuth 2.0 인증 방식을 사용하여 간편한 사용자 인증 제공
  - 각 플랫폼에서 제공하는 OAuth Provider를 통해 로그인/회원가입 지원

- 🖥️ 사용자 상태 관리 (Zustand)
  - Zustand를 사용하여 전역 상태로 사용자 정보 및 인증 상태 관리
  - 로그인 상태(`isLogin`)와 사용자 정보(`user`)을 전역으로 유지
  - `supabase.auth.signOut()`을 통해 인증 세션을 해제하고, 로그아웃 기능 제공
 
- 📤 회원 탈퇴 기능
  - Supabase의 Admin API를 사용하여 안전하게 사용자 계정 삭제
  - `SERVICE_ROLE_KEY`를 활용하여 서버 환경에서만 실행되도록 설정

- ❗️ 접근 제어 (Next.js Middleware)
  - 로그인 여부에 따른 페이지 접근 제어

  
### 2️⃣ SIGNUP 페이지
- 🚀 Signup 프로세스 구성
  - **Funnel 패턴**을 적용하여 단계별로 쉽게 Signup 과정을 진행할 수 있도록 설계

- 🎨 UX 향상 요소
  - **Progress bar**로 현재 단계 표시 → **시각적 UX** 향상
  - **세션 스토리지**를 활용해 입력 및 선택한 정보를 저장하여 새로고침 후에도 기존 입력 및 선택값 유지

- 📄 닉네임 및 약관 동의 페이지
    - 버튼 disabled 조건: 닉네임 입력 및 체크박스 필수 선택
    - 전체 동의 체크박스: 선택 시 모든 체크박스 자동 선택, 해지 시 자동 해지 기능 구현
    - 이용약관 모달 창: 이용약관 체크박스 선택 시 모달 창이 팝업

- 🛠️ 기능 구현
  - 유저 설정 데이터
    - `supabase`와 연동하여 유저 정보를 저장
  - Signup 페이지 리다이렉트 설정
    - 미들웨어에서 유저 설정값을 확인 후 조건에 따라 페이지 이동

  
### 3️⃣ 메세지 작성 페이지
- ✉️ 편지지 설정
  - 사용자가 다양한 디자인 중에서 원하는 편지지를 선택할 수 있습니다.

- ✉️ 편지봉투 설정
  - 편지봉투의 색상이나 디자인을 사용자 취향에 맞게 선택할 수 있습니다.

- ✉️ 메세지 작성
  - 사용자가 내용을 입력하여 편지 메시지를 작성할 수 있습니다.
  - 메시지 작성 시, **편지함 주인에게만 공개 여부**를 선택할 수 있습니다.

💡 Funnel 패턴을 사용해 단계별로 설정 과정을 진행하며, 이전 단계로 돌아가더라도 사용자가 입력한 데이터가 그대로 유지되어 편리한 사용자 경험을 제공합니다.


### 4️⃣ 편지함 페이지
- ✉️ 수신한 편지 확인
  - 사용자 별 편지함에서 수신한 편지와 그 개수를 표시합니다.
  - 페이지네이션을 통해 많은 편지도 손쉽게 확인할 수 있도록 구현했습니다.

- 🔗 내 편지함 링크 공유 기능
  - 사용자는 자신의 편지함 링크를 다른 사람과 공유할 수 있습니다.
  - 사용자끼리 편지함을 공유하여 해당 사용자에게 편지를 남길 수 있습니다.

- 📬 회원의 편지만 수신, 편지 개수 비공개, 편지 내용 비공개 기능
  - 사용자는 편지함의 공개 설정을 자유롭게 조정할 수 있습니다.
  - 회원의 편지만 수신하거나, 편지 개수와 내용을 비공개로 설정하여 다른 사용자가 이를 볼 수 없도록 할 수 있습니다.

- 🔒 1월 1일 이전에는 편지 내용 비공개
  - 1월 1일 이전에는, 수신한 편지의 내용은 비공개로 설정됩니다. 1월 1일 이후에 편지의 내용을 확인할 수 있습니다.


### 5️⃣ 마이페이지

- 🎨 회원정보 수정
  - 닉네임 변경 : 닉네임 변경 시 toast 메세지로 변경이 완료되었음을 알려줍니다.
  - 편지함 설정 : 내 편지함의 비회원의 편지 수신 가능 여부와, 공개 여부를 변경할 수 있습니다.

- ✉️ 내가 작성한 편지
  - 내가 다른 사람에게 작성했던 모든 편지를 확인할 수 있습니다.

- 😭 회원 탈퇴
  - 사용자의 동의를 받고 회원 탈퇴가 가능합니다.

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
