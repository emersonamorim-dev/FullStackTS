import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../models/Pessoa';
import { PessoasService } from '../../services/pessoas.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.scss']
})
export class PessoaListComponent implements OnInit {

  pessoaDialog: boolean = false;

  selectedPessoas: Pessoa[] = [];

  submitted: boolean = false;

  pessoa: Pessoa[] = [];

  pessoas!: Pessoa;

  addPessoaForm: FormGroup;

  addPessoaRequest: Pessoa = {
    id: '',
    nome: '',
    cpf: '',
    estado: '',
  };

  constructor(private router: Router, private pessoasService: PessoasService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

public ngOnInit(): void {
      this.pessoasService.getAllPessoas().subscribe({
        next: (x) => {
          this.pessoa = x;
        },
        error: (response) => {
          console.log(response);
        }
      });
    }


public addPessoa() {

      this.pessoasService.addPessoa(this.addPessoaRequest).subscribe({
        next: (x) => {
          alert("Pessoa adicionada com sucesso.");
          this.router.navigate(['pessoa']);
        },
        error: (response) =>{
          console.log(response);
        }
      });
    }


public openNew() {
    this.pessoa = [];
    this.submitted = false;
    this.pessoaDialog = true;
}


public editPessoa(pessoa: Pessoa) {
    this.pessoas = {...pessoa};
    this.pessoaDialog = true;
}

public confirm() {
  this.confirmationService.confirm({
      message: 'Tem certeza de que deseja executar esta ação?',
      accept: () => {

      }
  });
}


public hideDialog() {
    this.pessoaDialog = false;
    this.submitted = false;
}

public findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.pessoa.length; i++) {
      if (this.pessoa[i].id === id) {
          index = i;
          break;
      }
  }

  return index;
}

public createId(): string {
  let id = '';
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for ( var i = 0; i < 5; i++ ) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return id;
}
}
