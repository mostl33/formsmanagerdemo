import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { NgFormsManager } from '@ngneat/forms-manager';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.css'],
})
export class Step3Component implements OnInit {
  public step1Values = {};
  public step2Values = {};

  constructor(private manager: NgFormsManager) {}

  ngOnInit() {
    this.step1Values = this.manager.getControl('step1');
    this.step2Values = this.manager.getControl('step2');
  }
}
