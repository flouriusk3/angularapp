import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
 // template: '<h2>John Doe</h2>'
})

export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor(){
  }

  ngOnInit(){
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: 'One Main St.',
        city: 'Houston',
        state: 'TX'
      }
    }
  }

}

