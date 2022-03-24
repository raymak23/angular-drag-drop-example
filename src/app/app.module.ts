import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { HelloComponent } from './hello.component';
import { EditorComponent } from './editor/editor.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    DragDropModule,
  ],
  declarations: [AppComponent, HelloComponent, EditorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
