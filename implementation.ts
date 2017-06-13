///<reference path="namespace.ts"/>
///<reference path="namespacePart2.ts"/>

/* usage of namespace */
let objStudent: nsStudent.IStudent = { name: "Sudesh", english: 75, maths: 80, science: 60 };

function studentDetails() {
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = nsStudent.studentDetails(objStudent);
    (<HTMLInputElement>document.getElementById("lblMessage1")).innerHTML = nsStudent.studentTotalAndpercentage(objStudent);
}


