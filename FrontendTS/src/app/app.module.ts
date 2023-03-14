import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPessoaComponent } from './components/pessoa/add-pessoa/add-pessoa.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { EditPessoaComponent } from './components/pessoa/edit-pessoa/edit-pessoa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { AddAutomovelComponent } from './components/automovel/add-automovel/add-automovel.component';
import { EditAutomovelComponent } from './components/automovel/edit-automovel/edit-automovel.component';
import { ListAutomovelComponent } from './components/automovel/list-automovel/list-automovel.component';
import { MegaMenuModule } from 'primeng/megamenu';



import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    AddPessoaComponent,
    PessoaListComponent,
    EditPessoaComponent,
    AddAutomovelComponent,
    EditAutomovelComponent,
    ListAutomovelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    CalendarModule,
    MegaMenuModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,

    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])

  ],
  bootstrap: [AppComponent],
  providers: [MessageService, ConfirmationService]
})
export class AppModule { }
