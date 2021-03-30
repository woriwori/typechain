# typechain
1. Typescript 셋팅
- `tsconfig.json`
    - typescript 를 어떻게 javascript로 컴파일할지 설정하는 파일
- `prestart`
    - `start` 커맨드 전에 항상 실행됨
- `tsc`
    - node.js는 typescript를 해석할 수 없기 때문에 javascript로 컴파일하는 명령어

2. tsc-watch
- hot reloading처럼 저장만 하면 타입스크립트를 다시 컴파일해주는 패키지
- 즉, src 안의 코드가 바뀔 때마다 dist/ 하위의 파일이 변경됨

3. interface
- 객체의 type 정의
- `index.js` 보면 interface는 변환이 안됨
