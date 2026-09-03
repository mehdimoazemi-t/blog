const yup = require("yup");

const authLoginSchema = yup.object({
    username: yup
        .string()
        .trim()
        .min(6, "Username must be at least 6 characters")
        .max(16, "Username cannot exceed 16 characters")
        .matches(/^[a-zA-Z0-9_-]+$/, "Username can only contain letters, numbers, underscores, and hyphens")
        .required("Username is required"),

    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(44, "Password cannot exceed 44 characters")
        .required("Password is required"),
});

module.exports = authLoginSchema;
