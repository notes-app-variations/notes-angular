import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fetchNotes, deleteNote } from '../../api/actions';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
})
export class NotesComponent implements OnInit {
  filteredNotes = [];
  notes = [];
  alert = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.fetchAll();
    this.filteredNotes = this.notes;
  }

  goToNote(n) {
    this.router.navigate(['/note'], { queryParams: n });
  }

  bulkDelete() {
    alert('bulkDelete');
  }
  async fetchAll() {
    try {
      this.notes = await fetchNotes();
    } catch (e) {
      this.alert = e;
    }
  }
}
