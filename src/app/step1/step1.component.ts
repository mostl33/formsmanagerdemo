import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component implements OnInit {
  public form = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
  });

  constructor(private manager: NgFormsManager) {}

  ngOnInit() {
    this.manager.upsert('step1', this.form, {
      persistState: true,
    });
  }
}
