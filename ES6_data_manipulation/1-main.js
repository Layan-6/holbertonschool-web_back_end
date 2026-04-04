import getListStudentIds from "./1-get_list_student_ids.js";
import getListStudents from "./0-get_list_students.js";

// Test 1: Passing a string (not an array)
console.log(getListStudentIds("hello"));  // → [ ] (empty array)

// Test 2: Passing the array of students
console.log(getListStudentIds(getListStudents()));  // → [ 1, 2, 5 ]
