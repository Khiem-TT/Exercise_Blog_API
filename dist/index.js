"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRepo = void 0;
const data_source_1 = require("./src/data-source");
const Blog_1 = require("./src/entity/Blog");
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_router_1 = __importDefault(require("./src/routers/api.router"));
const port = 8000;
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Success!');
})
    .catch(err => {
    console.log('Error', err);
});
exports.BlogRepo = data_source_1.AppDataSource.getRepository(Blog_1.Blog);
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/api', api_router_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map