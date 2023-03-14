import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Automovel } from '../models/Automovel';
import { AutomovelService } from './automovel.service';
import { environment } from 'src/environments/environment';

describe('AutomovelService', () => {
  let service: AutomovelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AutomovelService]
    });
    service = TestBed.inject(AutomovelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all automovels', () => {
    const mockAutomovels: Automovel[] = [
      { id: '1', placa: '', veiculo: '' },
      { id: '2', placa: '', veiculo: ''}
    ];

    service.getAllAutomovel().subscribe((data: Automovel[]) => {
      expect(data.length).toBe(2);
      expect(data).toEqual(mockAutomovels);
    });

    const req = httpMock.expectOne(`${environment.baseApiUrl}/api/Automovel`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAutomovels);
  });

  it('should add an automovel', () => {
    const mockAutomovel: Automovel = {
      id: '1',
      placa: '',
      veiculo: ''
    };

    service.addAutomovel(mockAutomovel).subscribe((data: Automovel) => {
      expect(data).toEqual(mockAutomovel);
    });

    const req = httpMock.expectOne(`${environment.baseApiUrl}/api/Automovel`);
    expect(req.request.method).toBe('POST');
    req.flush(mockAutomovel);
  });

  it('should return an automovel by id', () => {
    const mockAutomovel: Automovel = {
      id: '2',
      placa: '',
      veiculo: ''
    };

    service.getAutomovel('1').subscribe((data: Automovel) => {
      expect(data).toEqual(mockAutomovel);
    });

    const req = httpMock.expectOne(`${environment.baseApiUrl}/api/Automovel/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAutomovel);
  });

  it('should update an automovel', () => {
    const mockAutomovel: Automovel = {
      id: '3',
      placa: '',
      veiculo: ''
    };

    service.updateAutomovel('1', mockAutomovel).subscribe((data: Automovel) => {
      expect(data).toEqual(mockAutomovel);
    });

    const req = httpMock.expectOne(`${environment.baseApiUrl}/api/Automovel/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockAutomovel);
  });

  it('should delete an automovel', () => {
    const mockAutomovel: Automovel = {
      id: '4',
      placa: '',
      veiculo: ''
    };

    service.deleteAutomovel('1').subscribe((data: Automovel) => {
      expect(data).toEqual(mockAutomovel);
    });
    const req = httpMock.expectOne(`${environment.baseApiUrl}/api/Automovel/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(mockAutomovel);
});
});

