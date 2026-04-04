export default function getListStudentIds(arr) {
  // 1. Check if arr is actually an array
  if (!Array.isArray(arr)) {
    return [];  // Return empty array for non-array inputs
  }
  
  // 2. If arr is an array, map each object to its id
  return arr.map((student) => {
    return student.id;  // Extract the 'id' property
  });
  
  // Or shorter: return arr.map(student => student.id);
}
