export default function updateStudentGradeByCity(students, city, newGrades) {
  // First: filter students by city
  // Then: map over filtered students to add grade
  return students
    .filter(student => student.location === city)
    .map(student => {
      // Find the grade object for this student
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      
      // Return a new object with the grade (or 'N/A' if not found)
      return {
        ...student,  // Spread all existing properties
        grade: gradeObj ? gradeObj.grade : 'N/A'
      };
    });
}
