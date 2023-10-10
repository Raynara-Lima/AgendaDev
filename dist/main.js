"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const server_module_1 = require("./server.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(server_module_1.ServerModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map