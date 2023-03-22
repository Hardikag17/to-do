import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { TaskComponent } from './component/task/task.component';
import { TaskItemComponent } from './component/task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
