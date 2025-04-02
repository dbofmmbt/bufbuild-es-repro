"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const connect_1 = require("@connectrpc/connect");
const connect_node_1 = require("@connectrpc/connect-node");
const proto_lib_1 = require("proto-lib");
const transport = (0, connect_node_1.createGrpcTransport)({
    baseUrl: "test_123",
});
exports.client = (0, connect_1.createClient)(proto_lib_1.TestService, transport);
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = {
            id: "123",
            content: "Hello from protobuf-es!",
            timestamp: Math.floor(Date.now() / 1000),
            tags: ["test", "example"],
        };
        const response = yield exports.client.getTestMessage(request);
        console.log(typeof response);
        response.console.log(response);
    });
}
test();
