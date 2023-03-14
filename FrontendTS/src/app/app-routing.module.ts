import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAutomovelComponent } from './components/automovel/add-automovel/add-automovel.component';
import { EditAutomovelComponent } from './components/automovel/edit-automovel/edit-automovel.component';
import { ListAutomovelComponent } from './components/automovel/list-automovel/list-automovel.component';
import { AddPessoaComponent } from './components/pessoa/add-pessoa/add-pessoa.component';
import { EditPessoaComponent } from './components/pessoa/edit-pessoa/edit-pessoa.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';

const routes: Routes = [
  {
    path:'',
    component: AddPessoaComponent
  },
  {
    path:'pessoas/add',
    component: AddPessoaComponent
  },
  {
    path:'pessoas',
    component: PessoaListComponent
  }
  ,
  {
    path:'pessoas/edit/:id',
    component: EditPessoaComponent
  },

  {
    path:'',
    component: ListAutomovelComponent
  },
  {
    path:'automovel',
    component: ListAutomovelComponent
  },
  {
    path:'automovel/add',
    component: AddAutomovelComponent
  }
  ,
  {
    path:'automovel/edit/:id',
    component: EditAutomovelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
