import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NotesComponent } from './notes/notes.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [AppComponent, AuthComponent, NotesComponent, NoteComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AuthComponent },
      { path: 'notes', component: NotesComponent },
      { path: 'note', component: NoteComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
