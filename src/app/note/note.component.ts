import { Component, OnInit, assertPlatform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html'
})
export class NoteComponent implements OnInit {
  note;
  loading = false;
  alert = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      //  this.note = notes[+params.get('noteId')];
    });
  }

  create() {
    alert('create');
  }

  edit() {
    alert('edited note');
  }

  delete() {
    alert('delete');
  }
}
