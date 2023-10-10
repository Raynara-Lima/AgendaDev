import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';
import { Repository } from 'typeorm';
export declare class PessoaService {
    private readonly pessoaRepository;
    constructor(pessoaRepository: Repository<Pessoa>);
    create(createPessoaDto: CreatePessoaDto): Promise<Pessoa>;
    findAll(): Promise<Pessoa[]>;
    findOne(id: number): Promise<Pessoa>;
    update(id: number, updatePessoaDto: UpdatePessoaDto): Promise<Pessoa>;
    remove(id: number): Promise<{
        affected?: number;
    }>;
    findAniversariantes(): Promise<Pessoa[]>;
}
