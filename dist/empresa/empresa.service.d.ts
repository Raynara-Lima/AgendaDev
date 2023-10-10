import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';
export declare class EmpresaService {
    private readonly empresaRepository;
    constructor(empresaRepository: Repository<Empresa>);
    create(createEmpresaDto: CreateEmpresaDto): Promise<Empresa>;
    findAll(): Promise<Empresa[]>;
    findOne(id: number): Promise<Empresa>;
    update(id: number, updateEmpresaDto: UpdateEmpresaDto): Promise<Empresa>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
