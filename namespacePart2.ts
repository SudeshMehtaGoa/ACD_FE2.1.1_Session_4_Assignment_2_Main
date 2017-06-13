/* one more method in existing namespace */
///<reference path="namespace.ts"/>
namespace nsStudent{
    export function studentTotalAndpercentage(student:IStudent):string
    {
        return(`Total : ${student.english + student.maths + student.science} and Average :  ${(student.english + student.maths + student.science)/3} `);
    }

}