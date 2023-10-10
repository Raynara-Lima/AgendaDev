"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
const common_1 = require("@nestjs/common");
const pessoa_entity_1 = require("./entities/pessoa.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PessoaService = class PessoaService {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    create(createPessoaDto) {
        const pessoa = new pessoa_entity_1.Pessoa();
        pessoa.nome = createPessoaDto.nome;
        pessoa.email = createPessoaDto.email;
        pessoa.dataNas = createPessoaDto.dataNas;
        pessoa.sexo = createPessoaDto.sexo;
        pessoa.profissao = createPessoaDto.profissao;
        pessoa.empresaTrab = createPessoaDto.empresaTrab;
        pessoa.endereco = createPessoaDto.endereco;
        pessoa.numeroWpp = createPessoaDto.numeroWpp;
        pessoa.nummeroCelular = createPessoaDto.numeroCelular;
        return this.pessoaRepository.save(pessoa);
    }
    findAll() {
        return this.pessoaRepository.find();
    }
    findOne(id) {
        return this.pessoaRepository.findOneBy({ id: id });
    }
    update(id, updatePessoaDto) {
        const pessoa = new pessoa_entity_1.Pessoa();
        pessoa.nome = updatePessoaDto.nome;
        pessoa.email = updatePessoaDto.email;
        pessoa.dataNas = updatePessoaDto.dataNas;
        pessoa.sexo = updatePessoaDto.sexo;
        pessoa.profissao = updatePessoaDto.profissao;
        pessoa.empresaTrab = updatePessoaDto.empresaTrab;
        pessoa.endereco = updatePessoaDto.endereco;
        pessoa.numeroWpp = updatePessoaDto.numeroWpp;
        pessoa.nummeroCelular = updatePessoaDto.numeroCelular;
        pessoa.id = id;
        return this.pessoaRepository.save(pessoa);
    }
    remove(id) {
        return this.pessoaRepository.delete(id);
    }
    findAniversariantes() {
        const month = (new Date()).getMonth() + 1;
        return this.pessoaRepository
            .createQueryBuilder('pessoa')
            .where('EXTRACT(MONTH FROM "dataNas") = :month', { month: '09' })
            .orderBy('EXTRACT(DAY FROM "dataNas") ')
            .getMany();
    }
};
exports.PessoaService = PessoaService;
exports.PessoaService = PessoaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pessoa_entity_1.Pessoa)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PessoaService);
//# sourceMappingURL=pessoa.service.js.map