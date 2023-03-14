import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Pessoa } from '../models/Pessoa';
import { PessoasService } from './pessoas.service';

describe('PessoasService', () => {
  let service: PessoasService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PessoasService],
    });
    service = TestBed.inject(PessoasService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all pessoas', () => {
    const mockPessoas: Pessoa[] = [
      { id: '1', nome: 'Emer', cpf: '123.456.789-00', estado: 'SP'},
      { id: '2', nome: 'Emer', cpf: '123.456.789-00', estado: 'SP'},
    ];

    service.getAllPessoas().subscribe((pessoas: Pessoa[]) => {
      expect(pessoas.length).toBe(2);
      expect(pessoas).toEqual(mockPessoas);
    });

    const req = httpMock.expectOne(`${service.baseApiUrl}/api/Pessoa`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPessoas);
  });

  it('should add a pessoa', () => {
    const mockPessoa: Pessoa = {
      id: '1',
      nome: 'Emer',
      cpf: '123.456.789-00',
      estado: 'SP'
    };


    service.addPessoa(mockPessoa).subscribe((pessoa: Pessoa) => {
      expect(pessoa).toEqual(mockPessoa);
    });

    const req = httpMock.expectOne(`${service.baseApiUrl}/api/Pessoa/1`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockPessoa);
    req.flush(mockPessoa);
  });

  it('should retrieve a single pessoa by id', () => {
    const mockPessoa: Pessoa = {
      id: '2',
      nome: 'Emer',
      cpf: '123.456.789-00',
      estado: 'SP'
    };


    service.getPessoa('1').subscribe((pessoa: Pessoa) => {
      expect(pessoa).toEqual(mockPessoa);
    });

    const req = httpMock.expectOne(`${service.baseApiUrl}/api/Pessoa/2`);
    expect(req.request.method).toBe('GET');
    req.flush(mockPessoa);
  });

  it('should update a pessoa', () => {

    const mockPessoa: Pessoa = {
      id: '3',
      nome: 'Emer',
      cpf: '123.456.789-00',
      estado: 'SP'
    };


    service.updatePessoa('1', mockPessoa).subscribe((pessoa: Pessoa) => {
      expect(pessoa).toEqual(mockPessoa);
    });

    const req = httpMock.expectOne(`${service.baseApiUrl}/api/Pessoa/3`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockPessoa);
    req.flush(mockPessoa);
  });

  it('should delete a pessoa', () => {
    const req = httpMock.expectOne(`${service.baseApiUrl}/api/Pessoa/4`);

    const mockPessoa: Pessoa = {
      id: '4',
      nome: 'Emer',
      cpf: 'emer@teste.com',
      estado: 'SP'
    };

    expect(req.request.method).toBe('DELETE');
    req.flush(mockPessoa);
    httpMock.verify();
    });
  });
