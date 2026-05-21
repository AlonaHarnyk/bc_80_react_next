import { students } from '../../data/data';
import { Student } from "../Student/Student";

export default function App() {
  //   return <div>test</div>;
  return (
    <>
      <Student student={students[0]} />
      <Student student={students[1]} />
    </>
    //   <h1>{student.name}</h1>
    //   <p>{student.age}</p>
    //   {/* <p>Is online: {student.isOnline ? 'Yes' : 'No'}</p> */}

    //   {student.isOnline && <p>Is online: Yes </p>}
    // </>
  );
}
