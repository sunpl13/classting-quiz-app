# ✨ [퀴즈 앱](https://classting-quiz-app-beta.vercel.app/) 기능 구현 

## 📚 목차

- [✨ 퀴즈 앱 기능 구현](#-퀴즈-앱-기능-구현)
  - [📚 목차](#-목차)
  - [1. 데모 영상](#1-데모-영상)
  - [2. 실행 방법](#2-실행-방법)
  - [3. 과제 소개](#3-과제-소개)
  - [4. 구현 기능](#4-구현-기능)
  - [5. 개발 스택](#5-개발-스택)
  - [6. 폴더 구조](#6-폴더-구조)


## 1. 데모 영상

- ### 1-1) 퀴즈 고르기

  <video controls width=60% src="https://github.com/Wanted-PreOnboarding/pre-onboarding-assignment-week-4-1-team-1/assets/68778883/e8b8881e-18ae-4b5b-8bf1-f9d8be2c51c4
" ></video>

- ### 1-2) 퀴즈 풀기

  <video controls width=60% src="https://github.com/Wanted-PreOnboarding/pre-onboarding-assignment-week-4-1-team-1/assets/68778883/ab6fdcd7-7019-4003-9593-edb11e7aab9a"></video>

- ### 1-3) 퀴즈 결과

  <video controls width=60% src="https://github.com/Wanted-PreOnboarding/pre-onboarding-assignment-week-4-1-team-1/assets/68778883/4975e0c0-0563-44bd-a776-2a3d4a6f1b02
"></video>

- ### 1-4) 문제 기록보기

  <video controls width=60% src="https://github.com/Wanted-PreOnboarding/pre-onboarding-assignment-week-4-1-team-1/assets/68778883/c7e12c2c-887c-44a2-b0c2-2af6a5fd8716"></video>

  - ### 1-5) 에러 발생 시

  <video controls width=60% src="https://github.com/Wanted-PreOnboarding/pre-onboarding-assignment-week-4-1-team-1/assets/68778883/00daac26-9016-493c-bd07-fe3ddc509ebd"></video>
  
  
<br>

## 2. 실행 방법

```bash
# 설치 방법

> git clone https://github.com/sunpl13/classting-quiz-app.git
> cd classting-quiz-app

# 실행 방법

초기 설정
> yarn install

실행
> yarn run dev

test
> yarn test
```
<br>

## 3. 과제 소개

Open API를 이용한 Quiz App을 개발합니다.


<br>

## 4. 구현 기능

  - [x] 사용자는 '퀴즈 풀기' 버튼을 클릭하여 퀴즈 풀기를 시작할 수 있다.
  - [x]  사용자는 문항에 대한 답안을 4개 보기 중에 선택할 수 있다.
  - [x]  사용자는 답안을 선택하면 다음 문항을 볼 수 있다.
    - [x]  답안 선택 후 다음 문항 버튼을 볼 수 있다.
    - [x]  답안이 맞았는지 틀렸는지 바로 알 수 있다.
    - [x]  다음 문항 버튼을 클릭하여 다음 문항으로 이동할 수 있다.
  - [x]  모든 문항을 다 풀면 사용자는 다음과 같은 결과 정보를 볼 수 있다.
    - [x]  퀴즈를 마칠 때까지 소요된 시간
    - [x]  정답 개수
    - [x]  오답 수
    - [x]  정 오답에 대한 비율을 차트로 표기
  - [x]  오답 노트 기능

  <br>


## 5. 개발 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white"/>
<img src="https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=white"/>
<img src="https://img.shields.io/badge/styledComponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white"/>
</div>

<br>
  
## 6. 폴더 구조
<pre>
📦src
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┣ 📜route.tsx
 ┣ 📜vite-env.d.ts
 ┃
 ┣ 📂api
 ┃ ┣ 📜quiz.ts
 ┃ ┗ 📜requestHandler.ts
 ┃
 ┣ 📂assets
 ┃ ┗ react.svg
 ┃
 ┣ 📂components
 ┃ ┣ 📜AccordionContent.tsx
 ┃ ┣ 📜Accrodion.tsx
 ┃ ┣ 📜DoughnutChart.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜ErrorBoundary.tsx
 ┃ ┣ 📜IncorrectAnswerNote.tsx
 ┃ ┣ 📜Quiz.tsx
 ┃ ┗ 📜QuizSelectField.tsx
 ┃
 ┣ 📂modals
 ┃ ┣ 📜CorrectModal.tsx
 ┃ ┣ 📜IncorrectModal.tsx
 ┃ ┣ 📜ModalLayout.tsx
 ┃ ┗ 📜Modals.tsx
 ┃
 ┣ 📂skeletons
 ┃ ┣ 📜LoadingSkeleton.tsx
 ┃ ┗ 📜Skeleton.tsx
 ┃
 ┣ 📂tests
 ┃ ┣ 📜Accordion.spec.tsx
 ┃ ┣ 📜AccordionContent.spec.tsx
 ┃ ┣ 📜CorrectModal.spec.tsx
 ┃ ┣ 📜Error.spec.tsx
 ┃ ┣ 📜IncorrectAnswerNote.spec.tsx
 ┃ ┣ 📜IncorrectModal.spec.tsx
 ┃ ┣ 📜Quiz.spec.tsx
 ┃ ┣ 📜QuizSelectField.spec.tsx
 ┃ ┃
 ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📜useGetQuiz.spec.tsx
 ┃ ┃
 ┃ ┣ 📂page
 ┃ ┃ ┗ 📜Question.spec.tsx
 ┃
 ┣ 📂contexts
 ┃ ┣ 📜ModalContext.tsx
 ┃ ┣ 📜MyAnswerContext.tsx
 ┃ ┣ 📜QuestionContext.tsx
 ┃ ┗ 📜QuizTimesContext.tsx
 ┃
 ┣ 📂hooks
 ┃ ┣ 📜useCleanUp.tsx
 ┃ ┣ 📜useGetQuiz.tsx
 ┃ ┗ 📜useModals.tsx
 ┃
 ┣ 📂pages
 ┃ ┣ 📜History.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Question.tsx
 ┃ ┗ 📜Result.tsx
 ┃
 ┣ 📂styles
 ┃ ┗ 📜reset.tsx
 ┃
 ┣ 📂types
 ┃ ┣ 📜modalComponentPropType.ts
 ┃ ┗ 📜quiztype.ts
 ┃
 ┣ 📂utils
 ┃ ┣ 📜shuffle.ts
 ┃ ┃
 ┃ ┗ 📂test
 ┃ ┃ ┣ 📜datas.ts
 ┃ ┃ ┣ 📜render.tsx
 ┃ ┃ ┗ 📜setupTests.ts
 ┃
 ┣ 📂__mocks__
 ┃ ┗ 📜handlers.ts
</pre>
