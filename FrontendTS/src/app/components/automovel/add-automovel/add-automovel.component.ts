import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Automovel } from '../../models/Automovel';
import { AutomovelService } from '../../services/automovel.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { catchError, debounce, Subscription, tap, throwError } from 'rxjs';



@Component({
  selector: 'app-add-automovel',
  templateUrl: './add-automovel.component.html',
  styleUrls: ['./add-automovel.component.scss'],
  providers: [ConfirmationService, MessageService]
})
export class AddAutomovelComponent implements OnInit {


  automovel: Automovel[] = [];

  automovelDialog: boolean = false;

  automovells: Automovel[] = [];

  automovels!: Automovel;

  selectedAutomovel: Automovel[] = [];

  submitted: boolean = false;

  // formulário de propriedade
  addAutomovelForm: FormGroup;

  automovelSSubscription$: Subscription;

  //variável pública local
  addAutomovelRequest: Automovel = {
    id: '',
    placa: '',
    veiculo: '',
  };

  constructor(private route: ActivatedRoute, private router: Router, private automovelService: AutomovelService, private messageService: MessageService, private confirmationService: ConfirmationService) {

  }

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
        this.router.navigate(['/automovel/add']);
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

public onHide() {
  window.location.reload();
}


public editAutomovel(automovel: Automovel) {
    this.automovels = {...automovel};
    this.automovelDialog = true;
}

deleteSelectedAutomovel() {
  this.confirmationService.confirm({
      message: 'Tem certeza de que deseja excluir o selecionado Automovel?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.automovel = this.automovel.filter(val => !this.selectedAutomovel.includes(val));
          this.selectedAutomovel = null;
          this.messageService.add({severity:'success', summary: 'Com Sucesso', detail: 'Automóvel Deletado', life: 3000});
      }
  });
}

deleteAutomovel(automovel: Automovel) {
  this.confirmationService.confirm({
    message: 'Tem certeza de que deseja excluir ' + automovel.id + '?',
    header: 'Confirmar',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.automovelService.deleteAutomovel(automovel.id).pipe(
        tap(() => this.messageService.add({severity:'success', summary: 'Com Sucesso', detail: 'Automóvel deletado', life: 3000})),
        catchError((error) => {
          console.log(error);
          this.messageService.add({severity:'error', summary: 'Erro', detail: 'Não foi possível excluir o automóvel', life: 3000});
          return throwError(error);
        })
      ).subscribe();
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



