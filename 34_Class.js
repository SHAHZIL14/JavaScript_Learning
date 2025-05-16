/* In javascript we have the ability to make the program divided into different objects as of OOPM.
Class is like the category of the object as it has variable members and members function wrapped within it.Every object made within the same class are similiar to the basic and fundamental stage but are not
same.
Every time me make an object with a class, of any real life entity, we have to 
call several defined methods to give me value of members of class, thus we have
contructor function which will be called automatically when a new object comes into existence by default.
For Example:-*/
class student{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    attendanceCall(){
        console.log(`${(this.name)} is present`);
    }
    static rollNoAssigner(rollNo){
        this.rollNo = rollNo;
        return rollNo;
    }
}

class Science_Student extends student{
    constructor(stream,tenthMarks){
     super("sahiba",21,"F")
     this.stream = stream;
     this.tenthMarks = tenthMarks;
    }
    isAllExperimentDone(){
        return false;
    }
}
const student1 = new student("sahiba",21,"F");
const scienceStudent1 = new Science_Student("BiologyChemistry",89);
console.log(student1.rollNoAssigner(124));
console.log(scienceStudent1);
// scienceStudent1.attendanceCall();


