"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectdb = void 0;
const mongoose_1 = require("mongoose");
async function connectdb() {
    //mongodb://<dbuser>:<dbpassword>@ds263048.mlab.com:63048/messages-react
    await mongoose_1.connect('mongodb://hectoraclsystems:H3ct0r83@ds263048.mlab.com:63048/messages-react', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
        .then(db => console.log("Database is conected"))
        .catch(err => console.log(err));
}
exports.connectdb = connectdb;
//# sourceMappingURL=databases.js.map