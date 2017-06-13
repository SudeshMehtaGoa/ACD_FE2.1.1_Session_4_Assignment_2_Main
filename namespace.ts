/* namespace file with interface and function */
namespace nsStudent{
    /* interface */
    export interface IStudent {
        name:string;
        english:number;
        maths:number;
        science:number;
    }
    export function studentDetails(student:IStudent):string
    {
        return(`Name : ${student.name} ( English : ${student.english} , Maths : ${student.maths} , Science : ${student.science} )`);
    }

}


