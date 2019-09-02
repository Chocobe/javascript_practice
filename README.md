# Javascript ES6

* Jquery 페이지 : https://code.jquery.com (https://code.jquery.com/jquery)

* CDN (Content Delivery Network : 콘텐츠 전송 네트워크) : https://cdnjs.com (https://cdnjs.com/libraries)

---

## 개발 도구 설치하기

### [:camel: Git 터미널 설정하기]

1. 터미널을 cmd 에서 bash로 변경하기

    1. ``ctrl + ,``로 Visual Code 설정 열기

    1. ``기능`` -> ``터미널`` -> ``External:Windows Exec``에 bash.exe 경로 설정하기

        * 경로 예) C:\Program Files\Git\bin\bash.exe

1. Visual Code 재시작

1. `` Ctrl + ` `` 로 터미널 열기

1. 터미널 추가하기

1. ``cmd``로 선택된 부분을 선택하여, ``기본 셸 선택``

1. ``bash``선택

1. 기존의 터미널 삭제 & 새 터미널 열기 (``bash`` 터미널이 열린다)


### [:camel: Node.js 설치하기]

1. https://nodejs.org/ 에서 ``신뢰도 높음 버전``으로 설치하기

1. Visual Code 재시작 (Node.js 설치 시, npm도 같이 설치 된다.)


### [:camel: npm 초기화 하기 (프로젝트 의존성 관리 초기화)]

1. 터미널을 연다.

1. 프로젝트의 루트로 이동한다.

1. 프로젝트의 의존성 관리를 위해, npm 초기화

    * 명령어 : ``npm init``


### [:camel: ``underscore`` 설치하기]

1. 터미널을 연다.

1. 프로젝트의 루트로 이동한다.

1. 설치한다.

    * 명렁어 : ``npm install --save underscore``


### [:camel: 걸프(빌드도구) & 바벨(트렌스컴파일러) 설치하기]

1. 터미널을 연다.

1. 걸프를 전역으로 설치한다.

    * 명령어 : ``npm install -g gulp``

    * 프로젝트를 생성할때 마다 ``npm install --save-dev gulp`` 명령으로 프로젝트 지역에 설치해야 한다.

1. 바벨을 프로젝트 지역에 설치한다.

    1. 명령어 : ``npm install --save--dev @babel/preset-env``

        * ``.babelrc``파일 생성하기

        * 다음 코드를 작성한다.

            ```javascript
                { "preset" : ["@babel/preset-env"] }
            ```
    
    1. 명령어 : ``npm install --save-dev @babel/core``

    1. 명령어 : ``npm install --save-dev gulp-babel@next``

    1. 프로젝트 루트에 ``gulpfile.js`` 파일을 생성한다.

        * ``gulpfile.js``에 다음 코드를 작성한다.

            ```javascript
                const gulp = require('gulp');
                const babel = require('gulp-babel');
            
                gulp.task('default', function(callback) {
                    // 노드 소스의 트렌스컴파일을 위한 파일경로와 저장경로 설정하기
                    gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));

                    // 브라우저 소스의 트렌스컴파일을 위한 파일경로와 저장경로 설정하기
                    gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
                    
                    // callback 완료 명시 (없을 시, 오류 발생)
                    callback();
                });
            ```

:camel:[[Top]](#javascript-es6)

---

## 프로젝트 생성시 준비작업

1. 프로젝트 루트 생성 (프로젝트 폴더)

1. 깃 생성 (git init)

1. npm으로 페키지 생성 - 프로젝트 루트에서 실행할 것 (npm init)

1. ``gulpfile.js`` 파일 생성

    ```javascript
    const gulp = require('gulp');
    const babel = require('gulp-babel');

    gulp.task('default', function(callback) {
        // 걸프 작업을 여기에 씁니다.

        // 노드 소스
        gulp.src("es6/**/*.js").pipe(babel()).pipe(gulp.dest("dist"));

        // 브라우저 소스
        gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));

        callback();
    });
    ```

1. gulp와 babel을 로컬 패키지로 추가

    1. npm install --save-dev **gulp**

    1. npm install --save-dev **@babel/core**

    1. npm install --save-dev **gulp-babel@next**

    1. npm install --save-dev **@babel/preset-env**

        * ``.babelrc`` 파일을 생성하여, ``{ "presets" : [@babel/preset-env"] }`` 작성하기

    1. 노드 소스용 서브디렉터리 만들기 (디렉터리 : es6)

    1. 브라우저 소스용 서브디렉터리 만들기 (디렉터리 : public/es6)


1. 작성한 코드 실행은 아래의 순서로 한다.

    1. ``gulp``

    1. ``node dist/파일명.js``

:camel:[[Top]](#javascript-es6)