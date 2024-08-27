import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First Name is a required field")
        .min(1)
        .max(50),
    lastName: yup
        .string()
        .required("Last Name is a required field")
        .min(1)
        .max(50),
    email: yup
        .string()
        .required("Email is a required field")
        .email("Email required in correct format"),
    password: yup
        .string()
        .min(8, "Password must contain at least 8 characters")
        .trim(),
});

function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        console.log(data);
        alert("Congratulations! Your account is created");
    };

    return (
        <div className="app">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Register your first account!</h3>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    style={{ borderColor: errors.email && "red" }}
                    {...register("firstName")}
                />
                {errors.firstName && (
                    <p className="form-error-text">
                        {errors.firstName.message}
                    </p>
                )}
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    style={{ borderColor: errors.email && "red" }}
                    {...register("lastName")}
                />
                {errors.lastName && (
                    <p className="form-error-text">{errors.lastName.message}</p>
                )}
                <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    style={{ borderColor: errors.email && "red" }}
                    {...register("email")}
                />
                {errors.email && (
                    <p className="form-error-text">{errors.email.message}</p>
                )}
                <input
                    type="text"
                    id="password"
                    name="password"
                    placeholder="Password"
                    style={{ borderColor: errors.password && "red" }}
                    {...register("password")}
                />
                {errors.password && (
                    <p className="form-error-text">{errors.password.message}</p>
                )}

                <button>Let's go!</button>
            </form>
        </div>
    );
}

export default App;
