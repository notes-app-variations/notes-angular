import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  filteredNotes = [];
  loading = false;
  alert = '';

  ngOnInit() {}

  bulkDelete() {
    alert('login');
  }
}
