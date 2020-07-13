# 실용적인 웹 프로그래밍

보편적이지 않은 프로그래밍을 테마로 웹 프로그래밍을 경험합니다

## 개요

### 보편적이지 않는 프로그래밍

이 교육은 <보편적이지 않은 프로그래밍>을 부 제목으로, 처음부터 누구나 사용할 수 있는 프로그램 보다는 자신을 위한 프로그램으로 시작하는 경험을 권고하는 강의입니다. 강의의 마지막에는 프로그래밍은 내가 원하는 방향으로 만들어주는 ‘주문’이라는 인식을 받을 것입니다.

### 코딩하지 않고 프로그래밍하기

> **Programming** is the process of creating a set of instructions that tell a computer how to perform a task.
>
> — [What is Programming? (video) | Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming/intro-to-programming/v/programming-intro)

프로그래밍은 컴퓨터에게 작업을 어떻게 수행할지 알려주는 지시의 집합을 창조하는 과정입니다. 코딩(Coding)’은 코드를 하나씩 작성하는 행위입니다. 개념적으로 서로 차이가 나는 의미를 갖고 있다고 이해할 수 있습니다. 프로그래밍의 하위 개념을 코딩으로 정의할 수 있겠네요. (당장 이게 무슨 의미인지는 모르셔도 괜찮습니다.)

코딩을 하지 않고 충분히 프로그래밍이 가능한 방법을 소개합니다.

## 설리번 교육 구성원 목록

- 선생님 : 김정인, 김무훈, 이지안, 박세문, 양아름
- 운영진 : 이주연, 권나현

## 교육 일정

- 7월 26일까지 교육 자료 작성 마치기
- 이후부터 가능한 빠르게 강의 녹화와 편집을 한다.
- 비공개 모집으로 베타 테스트, 이후 공개 (마감 기한 8월 23일을 고려하면 늦어도 8월 10일 이전까지 CBT 피드백이 끝나야 한다)
- 5개의 차시로 구성 - 부분 차시의 수업 시간은 5~7분 내외

## 차시별 계획

### 0차시. 오리엔테이션

1. 설리번 선생님 소개하기
2. 수업 맛보기 ([개요](#개요) 부분 설명)

### 1차시. 보편적이지 않은 웹 프로그래밍

> IOS : [Human Interface Guidelines - Design - Apple Developer](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)  
> Android : [Material Design](https://material.io/)  
> web : ??

웹은 **일반적으로 권장하는 UI 가이드 라인**이 없는 유일한 플랫폼입니다. 웹의 근간인 HTML은 링크를 지원하는 문서(Hyper Text)라는 개념을 바탕으로 설계되었습니다. 그 덕분에 지금까지 내용이 비슷해도 페이지마다 각자 다른 스타일의 사용자 인터페이스를 허용하게 되었습니다.

이 특징은 다양한 형식의 웹 사이트를 접해볼 수 있다는 사실로 생각할 수 있으나, 그런 만큼 가장 많은 디자인의 호불호를 웹에서 접해볼 수 있습니다._“내가 해보면 이 디자인보다 괜찮게 할 수 있지 않을까?”_ 같은거죠.

이 피해는 사용자에게 고스란히 넘어갑니다. 다행히 웹은 독자가 직접 ‘수정 가능한 문서’라는 개념적인 기능을 갖고 있어서 개인이 원하는 방향의 웹 스타일시트, 스크립트를 주입하여 관리할 수 있습니다.

우리가 이용하는 웹 서비스는 보편적인 프로그램에 속하여 정해진 기능 이외의 일을 할 수 없습니다. 그러나 웹의 특징을 활용해서 자신에 맞게 쓰기 위해 보편적인 프로그램을 보편적이지 않은 프로그램으로 직접 변형해볼 것 입니다.

서비스 중인 기존의 웹 페이지를 자신에 맞는 보편적이지 않은 형태로 변화하고, 다시 보편적으로 변하는 과정을 보여드립니다.

#### 실용적인(보편적이지 않은) 프로그래밍 예시

- 개인의 쓰임에 맞게 직접 UI를 변형하기
- 반복되는 입력을 컴퓨터가 대신 수행하게 만들기

### 2차시. 웹 서비스의 스타일을 변형하기

1. 실습에 필요한 개념 알아보기
   1. HTML -> 마크업 언어의 개념 소개, 요소, 문법(중첩, 블록, 인라인), 속성, 문서 구성
   2. CSS -> 기본 문법 (선택자와 선언부의 구별)
   3. CSS 선택자 -> 비유를 통해 선택자의 종류를 구별함(태그는 선택 가능한 규칙, ID는 학생 한명, 클래스는 교실 구성원 전체), 종류별로 기술 방법, 심화된 선택자 사용법(조상-자손, 부모-자식, 여러 개 선택)
2. 실습
   1. 예시로 몇가지 웹 확장을 소개하기 (광고 차단 웹 확장, 다크 모드)
   2. 자주 사용하는 포털 서비스의 배경사진 넣어보기
   3. TODO

### 3차시. 웹 서비스의 레아아웃을 변형하기

1. 실습에 필요한 개념 알아보기
   1. 자바스크립트 -> DOM 다루기
2. 실습
   1. 예시로 몇가지 웹 확장을 소개하기 ([just-news](https://github.com/disjukr/just-news).. TODO)
   2. TODO

### 4차시. 윤리적으로 사용하기

#### 교차 사이트 스크립트

커스텀 스크립팅은 자신을 편하기 위한 도구입니다. 그러나 남을 겨냥해서 악의적인 스크립트를 설계하는 행동은 윤리적으로 어긋난 행동입니다.
자신의 편의를 위해 작성한 스크립트는 괜찮으나, 악의적인 의도로 공개 게시판에 스크립트를 첨부하면 다른 사용자에게 피해를 줍니다.

#### 악의적이지 않지만 유머로 사용된 예

[도탁스 (DOTAX) | 🌀🌀🌀🌀🌀🌀 히어로즈 오브 더 탁스 🌀🌀🌀🌀🌀🌀 - Daum 카페](http://cafe.daum.net/dotax/FGFP/9109?q=%C8%F7%BE%EE%B7%CE%C1%EE%20%BF%C0%BA%EA%20%B4%F5%20%C5%B9%BD%BA%20%EC%8B%9C%EA%B3%B5%EC%9D%98%20%ED%8F%AD%ED%92%8D%EC%9D%80%20%EC%A0%95%EB%A7%90%20%EC%B5%9C%EA%B3%A0%EC%95%BC)

### 5차시. 마무리

TODO

## 교육 설계에 참고한 자료

- [보편적이지 않은 코딩](https://opentutorials.org/module/2503)
