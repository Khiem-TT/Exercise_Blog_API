"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("../controllers/api.controller/blog.controller");
const apiRouter = express_1.default.Router();
apiRouter.post('/blog/create', blog_controller_1.BlogController.addBlog);
apiRouter.get('/blog/list', blog_controller_1.BlogController.getListBlog);
apiRouter.put('/blog/:id/update', blog_controller_1.BlogController.updateBlog);
apiRouter.get('/blog/:id/detail', blog_controller_1.BlogController.getDetailBlog);
apiRouter.delete('/blog/:id/delete', blog_controller_1.BlogController.deleteBlog);
exports.default = apiRouter;
//# sourceMappingURL=api.router.js.map