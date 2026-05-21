import { students } from '../../data/data';
const student = students[0];
export default function App() {
  //   return <div>test</div>;
  return (
    <>
      <h1>{student.name}</h1>
      <p>{student.age}</p>
    </>
  );
}
