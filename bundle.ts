/* namespace file with interface and function */
var nsStudent;
(function (nsStudent) {
    function studentDetails(student) {
        return ("Name : " + student.name + " ( English : " + student.english + " , Maths : " + student.maths + " , Science : " + student.science + " )");
    }
    nsStudent.studentDetails = studentDetails;
})(nsStudent || (nsStudent = {}));
/* one more method in existing namespace */
///<reference path="namespace.ts"/>
var nsStudent;
(function (nsStudent) {
    function studentTotalAndpercentage(student) {
        return ("Total : " + (student.english + student.maths + student.science) + " and Average :  " + (student.english + student.maths + student.science) / 3 + " ");
    }
    nsStudent.studentTotalAndpercentage = studentTotalAndpercentage;
})(nsStudent || (nsStudent = {}));
///<reference path="namespace.ts"/>
///<reference path="namespacePart2.ts"/>
/* usage of namespace */
var objStudent = { name: "Sudesh", english: 75, maths: 80, science: 60 };
function studentDetails() {
    document.getElementById("lblMessage").innerHTML = nsStudent.studentDetails(objStudent);
    document.getElementById("lblMessage1").innerHTML = nsStudent.studentTotalAndpercentage(objStudent);
}
