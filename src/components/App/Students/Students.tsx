import type { StudentItem } from "../../../types"
import Student from "../../Student/Student"
interface StudentsProps{
    students:StudentItem[]
}

export default function Students({ students }: StudentsProps) {

    return <ul>
        {students.map((student) => {
            return <li key={student.id} >
              <Student student={student}/>
            </li>
        })}
    </ul>
}