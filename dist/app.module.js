"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pessoa_entity_1 = require("./pessoa/entities/pessoa.entity");
const pessoa_module_1 = require("./pessoa/pessoa.module");
const empresa_module_1 = require("./empresa/empresa.module");
const empresa_entity_1 = require("./empresa/entities/empresa.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            pessoa_module_1.PessoaModule,
            empresa_module_1.EmpresaModule,
            typeorm_1.TypeOrmModule.forRoot({
                autoLoadEntities: true,
                type: 'postgres',
                host: 'db.eujdvithdugkjpbrrkex.supabase.co',
                port: 5432,
                password: 'raynarabd1709',
                username: 'postgres',
                entities: [pessoa_entity_1.Pessoa, empresa_entity_1.Empresa],
                database: 'postgres',
                synchronize: true,
                logging: true,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map