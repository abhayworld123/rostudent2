import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


///// Start Project
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;

// Core
import { CoreModule } from './core/core.module';

// Shared/Widget
import { SharedModule } from './shared/shared.module'

// Feature Modules
import { ItemModule }   from './items/shared/item.module';
import { UploadModule } from './uploads/shared/upload.module';
import { UiModule }     from './ui/shared/ui.module';
///// End Project


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    ItemModule,
    UiModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
