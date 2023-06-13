"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const index_1 = require("../../../index");
class BlogController {
    static async addBlog(req, res) {
        try {
            const blogData = {
                title: req.body.title,
                content: req.body.content
            };
            const blog = await index_1.BlogRepo.save(blogData);
            if (blog) {
                res.status(200).json({
                    message: 'Create blog success!',
                    blog: blog
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async getListBlog(req, res) {
        try {
            const blogs = await index_1.BlogRepo.find();
            if (blogs) {
                res.status(200).json({
                    message: 'Success!',
                    blogs: blogs
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async updateBlog(req, res) {
        try {
            const blogSearch = await index_1.BlogRepo.findOneBy({ id: +req.params.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: 'Blog does not exist!'
                });
            }
            await index_1.BlogRepo.update({ id: +req.params.id }, req.body);
            res.status(200).json({
                message: 'Update success!'
            });
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async getDetailBlog(req, res) {
        try {
            const blog = await index_1.BlogRepo.findOneBy({ id: +req.params.id });
            if (blog) {
                res.status(200).json({
                    message: 'Success!',
                    blog
                });
            }
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
    static async deleteBlog(req, res) {
        try {
            const blogSearch = await index_1.BlogRepo.findOneBy({ id: +req.params.id });
            if (!blogSearch) {
                res.status(500).json({
                    message: 'Blog does not exist!'
                });
            }
            await index_1.BlogRepo.delete({ id: +req.params.id });
            res.status(200).json({
                message: 'Delete success!'
            });
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}
exports.BlogController = BlogController;
//# sourceMappingURL=blog.controller.js.map