const Tags = require("../repository/tags");


exports.add = async (req, res, next) => {
    try {
        const { name } = req.body

        const existingTag = await Tags.findByName(name);

        
        if (existingTag) {
            return res.status(409).json({
                message: "Tag with this name already exists"
            })
        }

        await Tags.create(name)

        return res.status(201).json({
            message: "tag created successfully"
        })

    } catch (error) {
        next(error)
    }

}


exports.getAll = async (req, res, next) => {
    try {

        const tags = await Tags.findAll()

        return res.status(200).json(tags);

    } catch (error) {
        next(error)
    }

}


exports.getTag = async (req, res, next) => {
    try {

        const { id } = req.params

        const tag = await Tags.findById(id);

        if (tag.length <= 0) {
            return res.status(404).json({
                message: "Tag Not Found"
            })
        }

        return res.status(200).json(tag)

    } catch (error) {
        next(error)
    }
}


exports.deleteTag = async (req, res, next) => {
    try {

        const { id } = req.params

        const deletedTag = await Tags.remove(id);

        

        if (deletedTag[0].affectedRows == 0) {
            return res.status(404).json({
                message: "Tag Not Found"
            })
        }

        return res.status(200).json({
            message: "Tag deleted Successfully"
        })

    } catch (error) {
        next(error)
    }
}