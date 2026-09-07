const checkRole = (req, res, next) => {
    try {

        const user = req.user

        if (user.role !== "ADMIN") {
            return res.status(403).json({ message: "Forbidden: You do not have permission" });
        }

        next();

    } catch (error) {
        next(error)
    }
}