const google = "www.google.com",
    daum = "www.daum.net",
    nate = "www.nate.com",
    naver = "www.naver.com";

// 코드상에서 문자열을 줄바꿈해서 적기 위한 명령어 \ (결과에는 영향 없음)
var site = prompt("네이버, 다음, 네이트, 구글 중 \
        즐겨 사용하는 포털 검색 사이트는?", "");

switch(site) {
    case "구글":
        document.write(google);
        break;

    case "다음":
        document.write(daum);
        break;

    case "네이트":
        document.write(nate);
        break;

    case "네이버":
        document.write(naver);
        break;

    default:
        document.write("보기 중에 없는 사이트 입니다");
        break;
}