import { Component } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontendTarget';

  items: MenuItem[] = [];

  ngOnInit() {
      this.items = [
          {
              label:'Pessoas',
              icon:'pi pi-fw pi-file',
              items:[
                  {
                      label:'Cadastrar Pessoas',
                      icon:'pi pi-fw pi-plus',
                      routerLink:'pessoas/add'

                  },
                  {
                      label:'Listar Pessoas',
                      icon:'pi pi-fw pi-user-minus',
                      routerLink: 'pessoas'
                  },
                  {
                      separator:true
                  }
              ]
          },
          {
              label:'Automóveis',
              icon:'pi pi-fw pi-pencil',
              items:[
                  {
                      label:'Cadastrar Veículo',
                      icon:'pi pi-fw pi-plus',
                      routerLink:'automovel/add'
                  },
                  {
                      label:'Listar Automóveis',
                      icon:'pi pi-fw pi-user-minus',
                      routerLink:'automovel'
                  }

              ]
          },
          {
              label:'Usuários',
              icon:'pi pi-fw pi-user',
              items:[
                  {
                      label:'Cadastrar Usuários',
                      icon:'pi pi-fw pi-plus',

                  },
                  {
                      label:'Listar Usuários',
                      icon:'pi pi-fw pi-user-minus',

                  }
              ]
          }
      ];
  }
}

