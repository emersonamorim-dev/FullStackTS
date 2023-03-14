import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from '../../models/Pessoa';
import { PessoasService } from '../../services/pessoas.service';

@Component({
  selector: 'app-edit-pessoa',
  templateUrl: './edit-pessoa.component.html',
  styleUrls: ['./edit-pessoa.component.scss']
})
export class EditPessoaComponent implements OnInit {

  editPessoaForm!: FormGroup;


  pessoaDetails: Pessoa = {
    id: '',
    nome: '',
    cpf: '',
    estado: ''

  };
  constructor(private route: ActivatedRoute,
    private router: Router,
    private pessoasService: PessoasService,
    private formBuilder: FormBuilder) { }

  public ngOnInit(): void {
    this.editPessoaForm = this.formBuilder.group({
      Id: [[Validators.required]],
      Nome: ['', [Validators.required]],
      Cpf: ['', [Validators.required,]],
      Estado: ['', [Validators.required]],

    })

    const id = this.route.snapshot.paramMap.get('id');
    if (id != null) {
      this.pessoasService.getPessoa(id)
        .subscribe({
          next: (x) => {
            this.pessoaDetails = x;
          }
        });
    }
  }


  public deletePessoa(id: string) {
    this.pessoasService.deletePessoa(id)
      .subscribe((x) => {
        this.router.navigate(['pessoas']);
      });
  }
}
