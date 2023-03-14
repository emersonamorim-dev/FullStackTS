import { Component, OnInit } from '@angular/core';
import { Automovel } from '../../models/Automovel';;
import { AutomovelService } from '../../services/automovel.service';

import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-list-automovel',
  templateUrl: './list-automovel.component.html',
  styleUrls: ['./list-automovel.component.scss']
})
export class ListAutomovelComponent implements OnInit {

  automovel: Automovel[] = [];

  automovelDialog: boolean = false;

  automovells: Automovel[] = [];

  automovels!: Automovel;

  selectedAutomovels: Automovel[] = [];

  submitted: boolean = false;


  constructor(private automovelService: AutomovelService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

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

public openNew() {
    this.automovel = [];
    this.submitted = false;
    this.automovelDialog = true;
}

public deleteSelectedAutomovel() {
    this.confirmationService.confirm({
        message: 'Tem certeza de que deseja excluir o selecionado automóvel?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {


            this.messageService.add({severity:'success', summary: 'Successful', detail: 'automovels Deletado', life: 3000});
        }
    });
}

public editAutomovel(automovel: Automovel) {
    this.automovels = {...automovel};
    this.automovelDialog = true;
}

public deleteAutomovel(automovel: Automovel) {
    this.confirmationService.confirm({
        message: 'Tem certeza de que deseja excluir ' + automovel.placa + '?',
        header: 'Confirm',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.automovel = [];
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'automovel Deletado', life: 3000});
        }
    });
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
