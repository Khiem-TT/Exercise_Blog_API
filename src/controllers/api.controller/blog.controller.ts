import {BlogRepo} from "../../../index";
import {Blog} from "../../entity/Blog";
import e from "express";

export class BlogController {
    static async addBlog(req, res) {
        try {
            const blogData = {
                title: req.body.title,
                content: req.body.content
            }
            const blog = await BlogRepo.save(blogData);
            if (blog) {
                res.status(200).json({
                    message: 'Create blog success!',
                    blog: blog
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async getListBlog(req, res) {
        try {
            const blogs = await BlogRepo.find();
            if (blogs) {
                res.status(200).json({
                    message: 'Success!',
                    blogs: blogs
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async updateBlog(req, res) {
        try {
            const blogSearch = await BlogRepo.findOneBy({id: +req.params.id});
            if (!blogSearch) {
                res.status(500).json({
                    message: 'Blog does not exist!'
                });
            }
            await BlogRepo.update({id: +req.params.id}, req.body);
            res.status(200).json({
                message: 'Update success!'
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async getDetailBlog(req, res) {
        try {
            const blog = await BlogRepo.findOneBy({id: +req.params.id});
            if (blog) {
                res.status(200).json({
                    message: 'Success!',
                    blog
                });
            }
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    static async deleteBlog(req, res) {
        try {
            const blogSearch = await BlogRepo.findOneBy({id: +req.params.id});
            if (!blogSearch) {
                res.status(500).json({
                    message: 'Blog does not exist!'
                });
            }
            await BlogRepo.delete({id: +req.params.id});
            res.status(200).json({
                message: 'Delete success!'
            });
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }
}