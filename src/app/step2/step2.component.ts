import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css'],
})
export class Step2Component implements OnInit {
  public form = new FormGroup({
    pet: new FormControl(),
    color: new FormControl(),
  });

  constructor(private manager: NgFormsManager) {}

  ngOnInit() {
    this.manager.upsert('step2', this.form, {
      persistState: true,
    });
  }
}
