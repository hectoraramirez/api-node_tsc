"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const databases_1 = require("./databases");
async function main() {
    databases_1.connectdb();
    await app_1.default.listen(app_1.default.get('port'));
    console.log("server port: ", app_1.default.get('port'));
}
main();
//# sourceMappingURL=index.js.map