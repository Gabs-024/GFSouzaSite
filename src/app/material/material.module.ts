import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { MainComponent } from '../main/main.component';
import { OferecaTerrenoDialogComponent } from '../main/dialogs/ofereca-terreno-dialog/ofereca-terreno-dialog.component';

@NgModule({
  declarations: [
    MainComponent,
    OferecaTerrenoDialogComponent
  ],
  imports: [
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatTableModule,
    MatMenuModule,
    MatRadioModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule.forRoot()
  ]
})
export class MaterialModule { }
