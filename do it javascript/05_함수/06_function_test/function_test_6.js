var arrSubjects = ["국어", "영어", "수학"];
var result = testAvg(arrSubjects);

document.write(`평균점수 : ${result}`);

function testAvg(arrData) {
    var sum = 0;

    for(var i in arrData) {
        sum += Number(prompt(`${arrData[i]} 점수 입력`, "0"));
    }

    return sum / arrData.length;
}