import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AddAutomovelComponent } from './add-automovel.component';
import { AutomovelService } from '../../services/automovel.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { of } from 'rxjs';
import { Automovel } from '../../models/Automovel';
import { FormGroup, FormBuilder } from '@angular/forms';

describe('AddAutomovelComponent', () => {
  let component: AddAutomovelComponent;
  let router: Router;
  let automovelService: AutomovelService;
  let messageService: MessageService;
  let confirmationService: ConfirmationService;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: { navigate: jest.fn() } },
        { provide: AutomovelService, useValue: { addAutomovel: jest.fn(() => of({})) } },
        { provide: MessageService, useValue: {} },
        { provide: ConfirmationService, useValue: {} },
        { provide: FormBuilder, useValue: { group: jest.fn(() => ({})) } },
      ],
      declarations: [AddAutomovelComponent],
    });

    component = TestBed.createComponent(AddAutomovelComponent).componentInstance;
    router = TestBed.inject(Router);
    automovelService = TestBed.inject(AutomovelService);
    messageService = TestBed.inject(MessageService);
    confirmationService = TestBed.inject(ConfirmationService);
    formBuilder = TestBed.inject(FormBuilder);
  });

  it('should add automovel and navigate to /automovel', () => {
    component.addAutomovelRequest = { id: '1', placa: 'ABC1234', veiculo: 'Carro' } as Automovel;
    component.addAutomovelForm = formBuilder.group({});

    component.addAutomovel();

    expect(automovelService.addAutomovel).toHaveBeenCalledWith(component.addAutomovelRequest);
    expect(router.navigate).toHaveBeenCalledWith(['/automovel']);
  });
});
