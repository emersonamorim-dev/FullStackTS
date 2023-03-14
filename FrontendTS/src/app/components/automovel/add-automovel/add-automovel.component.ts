import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Automovel } from '../../models/Automovel';
import { AutomovelService } from '../../services/automovel.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-add-automovel',
  templateUrl: './add-automovel.component.html',
  styleUrls: ['./add-automovel.component.scss']
})
export class AddAutomovelComponent implements OnInit {


  automovel: Automovel[] = [];

  automovelDialog: boolean = false;

  automovells: Automovel[] = [];

  automovels!: Automovel;

  selectedAutomovels: Automovel[] = [];

  submitted: boolean = false;


  // formulário de propriedade
  addAutomovelForm: FormGroup;

  //variável pública local
  addAutomovelRequest: Automovel = {
    id: '',
    placa: '',
    veiculo: '',
  };

  constructor(private router: Router, private automovelService: AutomovelService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  public ngOnInit(): void {
    this.automovelService.getAllAutomovel().subscribe({
      next: (x) => {
        this.automovel = x;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }


  public confirm() {
    this.confirmationService.confirm({
        message: 'Tem certeza de que deseja executar esta ação?',
        accept: () => {
        }
    });
}

  public addAutomovel() {
    this.automovelService.addAutomovel(this.addAutomovelRequest).subscribe({
      next: (x) => {
        alert("Automovel adicionado com sucesso.");
        this.router.navigate(['automovel']);
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }


 public openNew() {
    this.automovel = [];
    this.submitted = false;
    this.automovelDialog = true;
}


public editAutomovel(automovel: Automovel) {
    this.automovels = {...automovel};
    this.automovelDialog = true;
}


public hideDialog() {
    this.automovelDialog = false;
    this.submitted = false;
}


public findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.automovel.length; i++) {
        if (this.automovel[i].id === id) {
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

