const yup = require("yup");

const authRegisterSchema = yup.object({
    name: yup
        .string()
        .trim()
        .min(3, "Name must be at least 3 characters")
        .max(34, "Name cannot exceed 34 characters")
        .required("Name is required"),

    username: yup
        .string()
        .trim()
        .min(6, "Username must be at least 6 characters")
        .max(16, "Username cannot exceed 16 characters")
        .matches(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, underscores, and hyphens")
        .required("Username is required"),

    email: yup
        .string()
        .email("Invalid email format")
        .required("Email is required"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(44, "Password cannot exceed 44 characters")
        .required("Password is required"),
});

module.exports = authRegisterSchema;
