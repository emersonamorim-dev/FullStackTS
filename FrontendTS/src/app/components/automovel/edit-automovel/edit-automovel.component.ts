import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Automovel } from '../../models/Automovel';
import { AutomovelService } from '../../services/automovel.service';


@Component({
  selector: 'app-edit-automovel',
  templateUrl: './edit-automovel.component.html',
  styleUrls: ['./edit-automovel.component.scss']
})
export class EditAutomovelComponent implements OnInit {

  // propriedade do formulário
  editAutomovelForm!: FormGroup;

  //variável pública local
  automovelDetails: Automovel = {
    id: '',
    placa: '',
    veiculo: ''
  };
  constructor(private route: ActivatedRoute,
    private router: Router,
    private automovelService: AutomovelService,
    private formBuilder: FormBuilder) { }

 public ngOnInit(): void {
    this.editAutomovelForm = this.formBuilder.group({
      Id: [[Validators.required]],
      Placa: ['', [Validators.required]],
      Veiculo: ['', [Validators.required]],

    })

    // obter id do URL
   const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.automovelService.getAutomovel(id)
        .subscribe({
          next: (x) => {
            this.automovelDetails = x;
          }
        });
    }
  }

  public updateAutomovel() {
    this.automovelService.updateAutomovel(this.automovelDetails.id, this.automovelDetails)
      .subscribe((x) => {
        this.router.navigate(['automovel']);
      });
  }

  public deleteAutomovel(id: string) {
    this.automovelService.deleteAutomovel(id)
      .subscribe((x) => {
        this.router.navigate(['automovel']);
      });
  }
}
