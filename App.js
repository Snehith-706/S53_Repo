import StudentLogin from "./StudentLogin";
import StudentRegister from "./StudentRegister";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <StudentLogin />
      <hr />
      <StudentRegister />
    </div>
  );
}
