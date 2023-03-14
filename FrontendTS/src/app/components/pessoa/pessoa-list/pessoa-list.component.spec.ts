import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PessoaListComponent } from './pessoa-list.component';
import { PessoasService } from '../../services/pessoas.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Pessoa } from '../../models/Pessoa';
import { of } from 'rxjs';
import { Router } from '@angular/router';

describe('PessoaListComponent', () => {
  let component: PessoaListComponent;
  let fixture: ComponentFixture<PessoaListComponent>;
  let pessoasServiceSpy: jasmine.SpyObj<PessoasService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PessoasService', ['getAllPessoas', 'addPessoa']);

    await TestBed.configureTestingModule({
      declarations: [PessoaListComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        MessageService,
        ConfirmationService,
        { provide: PessoasService, useValue: spy }
      ]
    }).compileComponents();

    pessoasServiceSpy = TestBed.inject(PessoasService) as jasmine.SpyObj<PessoasService>;
    pessoasServiceSpy.getAllPessoas.and.returnValue(of([]));
    pessoasServiceSpy.addPessoa.and.returnValue(of({
      id: '1',
      nome: 'Emerson Amorim',
      cpf: '123.456.789-00',
      estado: 'SP'
    } as Pessoa));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load pessoas on init', () => {
    const mockPessoa: Pessoa[] = [
      { id: '1', nome: 'Teste 1', cpf: '111.111.111-11', estado: 'SP' },
      { id: '2', nome: 'Teste 2', cpf: '222.222.222-22', estado: 'RJ' }
    ];
    pessoasServiceSpy.getAllPessoas.and.returnValue(of(mockPessoa));

    component.ngOnInit();

    expect(component.pessoa).toEqual(mockPessoa);
  });

  it('should add pessoa on submit', () => {
    spyOn(window, 'alert').and.callFake(() => {});
    spyOn(TestBed.inject(Router), 'navigate').and.callFake(() => Promise.resolve(true));

    const router = TestBed.inject(Router);

    component.addPessoaRequest = { id: '', nome: 'Teste', cpf: '111.111.111-11', estado: 'SP' };
    component.addPessoa();

    expect(pessoasServiceSpy.addPessoa).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Pessoa adicionada com sucesso.');
    expect(router.navigate).toHaveBeenCalledWith(['pessoa']);
  });
});


