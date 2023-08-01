function updateStudentGradeByCity(students, city, newGrades) {
  const updatedStudents = students.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents.filter((student) => student.location === city);
}

export default updateStudentGradeByCity;
