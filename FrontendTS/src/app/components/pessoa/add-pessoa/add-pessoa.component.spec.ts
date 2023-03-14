import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { of } from 'rxjs';

import { AddPessoaComponent } from './add-pessoa.component';
import { PessoasService } from '../../services/pessoas.service';

describe('AddPessoaComponent', () => {
  let component: AddPessoaComponent;
  let fixture: ComponentFixture<AddPessoaComponent>;
  let pessoasServiceSpy: jasmine.SpyObj<PessoasService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PessoasService', ['getAllPessoas', 'addPessoa']);

    await TestBed.configureTestingModule({
      declarations: [ AddPessoaComponent ],
      imports: [ RouterTestingModule, FormsModule, ReactiveFormsModule ],
      providers: [
        { provide: PessoasService, useValue: spy },
        MessageService,
        ConfirmationService
      ]
    })
    .compileComponents();

    pessoasServiceSpy = TestBed.inject(PessoasService) as jasmine.SpyObj<PessoasService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load all pessoas on init', () => {
    const mockPessoas = [{id: '1', nome: 'Emerson Amorim', cpf: '123456789', estado: 'MT'}];
    pessoasServiceSpy.getAllPessoas.and.returnValue(of(mockPessoas));

    component.ngOnInit();

    expect(pessoasServiceSpy.getAllPessoas).toHaveBeenCalled();
    expect(component.pessoa).toEqual(mockPessoas);
  });

  it('should add pessoa and navigate to pessoa list on successful add', () => {
    const mockPessoa = {id: '2', nome: 'Emerson Luiz', cpf: '987654321', estado: 'SP'};
    pessoasServiceSpy.addPessoa.and.returnValue(of(mockPessoa));
    const routerSpy = spyOn(component['router'], 'navigate');


    component.addPessoa();

    expect(pessoasServiceSpy.addPessoa).toHaveBeenCalled();
    expect(routerSpy).toHaveBeenCalledWith(['pessoa']);
  });
});
