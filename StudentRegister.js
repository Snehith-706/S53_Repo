import useForm from "./useForm";

export default function StudentRegister() {
  const { values, handleChange, handleSubmit } = useForm(
    { name: "", email: "", dept: "" },
    (data) => {
      console.log("Registration Success:", data);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={values.name}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        type="text"
        name="dept"
        placeholder="Department"
        value={values.dept}
        onChange={handleChange}
      />

      <button type="submit">Register</button>
    </form>
  );
}
