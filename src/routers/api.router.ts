import express from "express";
import {BlogController} from "../controllers/api.controller/blog.controller";

const apiRouter = express.Router();

apiRouter.post('/blog/create', BlogController.addBlog);
apiRouter.get('/blog/list', BlogController.getListBlog);
apiRouter.put('/blog/:id/update', BlogController.updateBlog);
apiRouter.get('/blog/:id/detail', BlogController.getDetailBlog);
apiRouter.delete('/blog/:id/delete', BlogController.deleteBlog);
export default apiRouter;