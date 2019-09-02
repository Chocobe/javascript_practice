# Javascript ES6

* Jquery 페이지 : https://code.jquery.com (https://code.jquery.com/jquery)

* CDN (Content Delivery Network : 콘텐츠 전송 네트워크) : https://cdnjs.com (https://cdnjs.com/libraries)

---

## 프로젝트 생성시 준비작업

1. 프로젝트 루트 생성 (프로젝트 폴더)

1. 깃 생성 (git init)

1. npm으로 페키지 생성 (npm init)

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

:camel:[Top](#javascript-es6)