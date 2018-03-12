import { Component, OnInit } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  types: string[] = ['Relaxation', 'Business', 'Other'];
  constructor() { }

  ngOnInit() {
  }
  onSubmit(formValues) {
    window.alert(JSON.stringify(formValues));
  }

}
