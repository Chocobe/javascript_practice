function TestScore(name, english, korean) {
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.avg;
}

TestScore.prototype.getInfo = function() {
    var str = "";
    str += `이름 : ${this.name}<br>`;
    str += `국어 : ${this.korean}<br>`;
    str += `영어 : ${this.english}<br>`;

    document.write(str);
}

TestScore.prototype.getAvg = function() {
    var totalSum = this.korean + this.english;
    this.avg = totalSum / 2;

    return this.avg;
}

var kimgun = new TestScore("김군", 80, 90);
var ohgun = new TestScore("오군", 100, 80);

kimgun.getInfo();
document.write(`평균점수 : ${kimgun.getAvg()}<br><br>`);

ohgun.getInfo();
document.write(`평균점수 : ${ohgun.getAvg()}`);