import useForm from "./useForm";

export default function StudentLogin() {
  const { values, handleChange, handleSubmit } = useForm(
    { email: "", password: "" },
    (data) => {
      console.log("Login Success:", data);
    }
  );

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={values.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={values.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>
    </form>
  );
}
