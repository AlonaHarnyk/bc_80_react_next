import { students } from '../../data/data';
const student = students[0];
export function Student() {
    return <> 
      <h1>{student.name}</h1>
      <p>{student.age}</p>
      {/* <p>Is online: {student.isOnline ? 'Yes' : 'No'}</p> */}

      {student.isOnline && <p>Is online: Yes </p>}
    </>
 }