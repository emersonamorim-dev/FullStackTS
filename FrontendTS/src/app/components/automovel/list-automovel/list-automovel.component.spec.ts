import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Automovel } from '../../models/Automovel';
import { AutomovelService } from '../../services/automovel.service';

import { ListAutomovelComponent } from './list-automovel.component';

describe('ListAutomovelComponent', () => {
  let component: ListAutomovelComponent;
  let fixture: ComponentFixture<ListAutomovelComponent>;

  const mockAutomovelService = {
    getAllAutomovel: jest.fn().mockReturnValueOnce({
      subscribe: jest.fn(),
    }),
  };

  const mockMessageService = {
    add: jest.fn(),
  };

  const mockConfirmationService = {
    confirm: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListAutomovelComponent],
      providers: [
        { provide: AutomovelService, useValue: mockAutomovelService },
        { provide: MessageService, useValue: mockMessageService },
        { provide: ConfirmationService, useValue: mockConfirmationService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAutomovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call getAllAutomovel method on automovelService', () => {
      component.ngOnInit();
      expect(mockAutomovelService.getAllAutomovel).toHaveBeenCalled();
    });
  });

  describe('openNew', () => {
    it('should reset automovel and set submitted to false', () => {
      component.automovel = [{ id: '1', placa: 'ABC123' } as Automovel];
      component.submitted = true;

      component.openNew();

      expect(component.automovel).toEqual([]);
      expect(component.submitted).toBe(false);
    });

    it('should set automovelDialog to true', () => {
      component.automovelDialog = false;

      component.openNew();

      expect(component.automovelDialog).toBe(true);
    });
  });

  describe('deleteSelectedAutomovel', () => {
    it('should show confirmation dialog', () => {
      component.deleteSelectedAutomovel();
      expect(mockConfirmationService.confirm).toHaveBeenCalled();
    });

    it('should show success message when confirmation is accepted', () => {
      const spyMessageService = jest.spyOn(mockMessageService, 'add');

      // Mock the confirmation dialog to accept
      mockConfirmationService.confirm.mockImplementationOnce((params) =>
        params.accept()
      );

      component.deleteSelectedAutomovel();

      expect(spyMessageService).toHaveBeenCalledWith({
        severity: 'success',
        summary: 'Successful',
        detail: 'automovels Deletado',
        life: 3000,
      });
    });
  });

  describe('editAutomovel', () => {
    it('should set automovels to the passed automovel and set automovelDialog to true', () => {
      const automovel = { id: '1', placa: 'ABC123' } as Automovel;
      component.automovels = { id: '2', placa:'DEF456' } as Automovel;
      component.automovelDialog = false;
      component.editAutomovel(automovel);

      expect(component.automovels).toEqual(automovel);
      expect(component.automovelDialog).toBeTruthy();
    });
  });

  describe('deleteAutomovel', () => {
  it('should set automovel to empty array and display success message', () => {
  const automovel = { id: '1', placa: 'ABC123' } as Automovel;

  expect(component.automovel).toEqual([]);
});
});


describe('hideDialog', () => {
it('should set automovelDialog to false and submitted to false', () => {
component.automovelDialog = true;
component.submitted = true;

component.hideDialog();

expect(component.automovelDialog).toBeFalsy();
expect(component.submitted).toBeFalsy();
});
});

describe('findIndexById', () => {
it('should return the index of the automovel with the given id', () => {
const automovel1 = { id: '1', placa: 'ABC123' } as Automovel;
const automovel2 = { id: '2', placa: 'DEF456' } as Automovel;
const automovel3 = { id: '3', placa: 'GHI789' } as Automovel;
component.automovel = [automovel1, automovel2, automovel3];
const index = component.findIndexById('2');

expect(index).toEqual(1);
});

it('should return -1 if no automovel with the given id is found', () => {
const automovel1 = { id: '1', placa: 'ABC123' } as Automovel;
const automovel2 = { id: '2', placa: 'DEF456' } as Automovel;
component.automovel = [automovel1, automovel2];

const index = component.findIndexById('3');

expect(index).toEqual(-1);
});
});

describe('createId', () => {
it('should return a string with length of 5', () => {
const id = component.createId();
expect(id.length).toEqual(5);
});

it('should return a string containing only uppercase and lowercase letters and numbers', () => {
  const id = component.createId();
  expect(id.length).toEqual(5);
});

it('should return a string containing only uppercase and lowercase letters and numbers', () => {
  const id = component.createId();

  expect(/^[a-zA-Z0-9]+$/.test(id)).toBe(true);
});
});
});
