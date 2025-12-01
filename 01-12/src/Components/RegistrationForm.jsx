import useForm from "../hooks/useForm";

export default function RegistrationForm() {
const validate = (values) => {
const errors = {};
if (!values.username) errors.username = "Username obbligatorio";
if (!values.email) {
errors.email = "Email obbligatoria";
} else if (!/\S+@\S+\.\S+/.test(values.email)) {
errors.email = "Email non valida";
}
if (!values.password) errors.password = "Password obbligatoria";
else if (values.password.length < 6)
errors.password = "La password deve avere almeno 6 caratteri";
return errors;
};

const { values, errors, handleChange, handleSubmit } = useForm(
{ username: "", email: "", password: "" },
validate
);

const submitForm = () => {
console.log("Form submitted:", values);
alert("Form inviato correttamente!");
};

return (
<form onSubmit={handleSubmit(submitForm)}>
<div>
<label>Username:</label>
<input
type="text"
name="username"
value={values.username}
onChange={handleChange}
/>
{errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
</div>

<div>
<label>Email:</label>
<input
type="email"
name="email"
value={values.email}
onChange={handleChange}
/>
{errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
</div>

<div>
<label>Password:</label>
<input
type="password"
name="password"
value={values.password}
onChange={handleChange}
/>
{errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
</div>

<button type="submit">Register</button>
</form>
);
}