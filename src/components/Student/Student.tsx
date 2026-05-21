import type { StudentItem } from "../../types";

interface StudentProps {
    student: StudentItem;
}

export default function Student({ student }: StudentProps) {
    return <> 
      <h1>{student.name}</h1>
      <p>{student.age}</p>
      {/* <p>Is online: {student.isOnline ? 'Yes' : 'No'}</p> */}

      {student.isOnline && <p>Is online: Yes </p>}
    </>
 }