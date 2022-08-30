let classObj = {
  name: "class A",
  teacherName: "Mary",
  students: [
    {
      name: "Ravi",
      id: "101",
      marks: [
        { subject: "English", mark: 25 },
        { subject: "Maths", mark: 48 },
        { subject: "Physics", mark: 40 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 20 },
      ],
    },
    {
      name: "Aju",
      id: "102",
      marks: [
        { subject: "English", mark: 35 },
        { subject: "Maths", mark: 38 },
        { subject: "Physics", mark: 33 },
        { subject: "Chemistry", mark: 34 },
        { subject: "Computer", mark: 30 },
      ],
    },
    {
      name: "Mini SS",
      id: "103",
      marks: [
        { subject: "English", mark: 12 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 18 },
        { subject: "Chemistry", mark: 30 },
        { subject: "Computer", mark: 40 },
      ],
    },
    {
      name: "Binu",
      id: "104",
      marks: [
        { subject: "English", mark: 49 },
        { subject: "Maths", mark: 49 },
        { subject: "Physics", mark: 47 },
        { subject: "Chemistry", mark: 46 },
        { subject: "Computer", mark: 50 },
      ],
    },
  ],
};
/*----Write a function to create a user object from the arguments given.
    Take the following details as an argument: name, email, age and phone number------*/

const userObj = (newName,mailId,age,newPhoneNumber) => {
   classObj.user = {
    name: newName,
    email: mailId,
    age: age,
    phone_number: newPhoneNumber,
  };
  console.log(classObj);
};
userObj("Naruto","usumakinaruto@gmail.com",45,888788996);


/*------------------------------------------------------------------------------------*/

/*---------------------------------1. Add student-------------------------------------*/
const addStudent=(newId,newName) => {
  let arr = classObj.students
  arr.push({
    id: newId,
    name: newName,
    marks:[{}]
  });
  console.log(classObj);
}
addStudent("007","akshay");


/*------------------------2.Enter mark for a student-----------------------------------*/
    const enterMark = (id,subject,mark) =>{
      for(let i=0 ; i<classObj.students.length ; i++){
        if(classObj.students[i].id === id){
          classObj.students[i].marks.push({
            subject:subject,
            mark:mark
          })
        }
      }
      console.log(classObj);
    }
    enterMark("101","Hindi",49);
/*-------------------------------------------------------------------------------------*/

/*---------3.Enter mark for a subject for multiple students---------------*/
const enterMarkMulStu =(subject,enterMark)=>{
  for (let i=0 ; i<classObj.students.length ; i++){
      for (let j=0 ; j<classObj.students[i].marks.length ; j++){
         if(classObj.students[i].marks[j].subject === subject){
            classObj.students[i].marks[j].mark = enterMark;
      }
    }
  }
  console.log(classObj);
}
enterMarkMulStu("English",45);

/*-------------------------------------------------------------------------*/

/*--------------4.Edit mark for a particular subject of a student----------*/

const editmark = (index, subject, newmark) => {
  const markData = classObj.students.reduce(
    (prev, next) => prev.concat(next.marks),
    []
  );
  // console.log(loopityloop)
  let enterMark = markData.filter((item) => item?.subject === subject);
  enterMark[index].mark = newmark;
  console.log(classObj);
}
editmark(3, "English", 100);

                        /*---OR---*/
// function editMarks(id, subject, mark) {
//   for (var i = 0; i < classObj.students.length; i++) {
//     if (classObj.students[i].id === id) {
//       for (let j = 0; j < classObj.students[i].marks.length; j++) {
//         if (classObj.students[i].marks[j].subject === subject) {
//           classObj.students[i].marks[j].mark = mark;
//         }
//       }
//     }
//   }
// }
// editMarks("007", "Maths", 45);
// console.log(classObj.students[4].marks);

/*-------------------------------------------------------------------------*/

/*---------------5.Change the class teacher of a class---------------------*/
const newFaculty = (classDivision,facultyName) =>{
  if(classDivision===classObj.name){
    classObj.teacherName = facultyName;
  }
  console.log(classObj);
}
newFaculty("class A","Bincy");

// classObj.teacherName = "Bincy";
// console.log(classObj)

/*-------------------------------------------------------------------------*/

/*---------------6.Remove a student from a class---------------------------*/


const removeStudent = (id,name)=>{
  for(let i=0 ; i<classObj.students.length ; i++){
    if(classObj.students[i].id === id && classObj.students[i].name === name){
      classObj.students.splice(i,1);
    }
  }
  console.log(classObj);
}
removeStudent("007","akshay");

/*-------------------------------------------------------------------------*/

/*---------------7.Delete a subject entry from every students--------------*/
const deleteSubject = (subject) => {
  for (let i = 0; i < classObj.students.length; i++) { 
    for (let j = 0; j < classObj.students[i].marks.length; j++) {
      if (classObj.students[i].marks[j].subject === subject) {
        classObj.students[i].marks.splice(j, 1);
      }
    }
  }
  console.log(classObj);
}
deleteSubject("English");

/*-------------------------------------------------------------------------*/

/*--------------8.Find the topper of a class given a subject-----------------*/
const findTopper = (subject)=>{
  let topper;
  let mark;
  let sortMark = [];
  for(let i = 0; i<classObj.students.length; i++){
    for(let j = 0; j<classObj.students[i].marks.length; j++){
      if(classObj.students[i].marks[j].subject === subject){
        sortMark.push(classObj.students[i].marks[j].mark);
        sortMark.sort()
        if(sortMark[j]===classObj.students[i].marks[j].mark){
          topper = classObj.students[i].name;
           mark = classObj.students[i].marks[j].mark;
        }
      }
    }
  }
  console.log(`The topper of the class in ${subject} is ${topper} with the mark of ${mark}.`)
}
findTopper("Chemistry");


/*---------------------------------------------------------------------------*/

/*------------9.Find the average mark for a given subject--------------------*/

const avgMark =(subject) =>{
  let t_mark =0;
  let avg_mark;
  for(let i=0; i<classObj.students.length; i++){
      for(let j=0; j<classObj.students[i].marks.length; j++){
        if(classObj.students[i].marks[j].subject === subject){
          t_mark += classObj.students[i].marks[j].mark;
          avg_mark= t_mark/classObj.students.length;
        }
      }
    }
  
  
  console.log(`The avg mark of ${subject} is ${avg_mark}`);
}
avgMark("Maths");
/*-------10.Sort and display the list of students in any order- ordered by name, mark etc------*/

const sortStudents=(division)=> {
  let tempArray = [];
  for (let i = 0; i < classObj.students.length; i++) {
    if(classObj.name === division){
      tempArray.push(classObj.students[i].id);
      tempArray.sort();
      console.log(tempArray);
      for(let j=0; j<tempArray.length; j++){
         tempArray[j]===classObj.students[i].id
      }
    }
  }
  
  console.log(classObj.students);
}

sortStudents("class A");

/*---------------------------------------------------------------------------------------------*/
/*--------ExtraThings------------------------*/
const exThingTotalStudent = (id) =>{
  let totalMark=0;
  for(let i=0; i<classObj.students.length; i++){
    if(classObj.students[i].id === id){
      for(let j=0; j<classObj.students[i].marks.length; j++){
        totalMark += classObj.students[i].marks[j].mark;
      }
    }
  }
  console.log(totalMark);
}
exThingTotalStudent("101");


/*----------------------------------------------*/
