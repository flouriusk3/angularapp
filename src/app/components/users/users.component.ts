import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm')form: any

  constructor() { }

  ngOnInit() {
    this.users = [
      // User 1
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 8:30:00'),
        hide: true
      },
      // User 2
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@yahoo.com',
        isActive: false,
        registered: new Date('03/11/2017 6:20:00'),
        hide: true
      },
      // User 3
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }

    ];

    this.loaded = true;

 
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){
   if (!valid) {
     console.log('Form is not valid');
   } else {
     value.isActive = true;
     value.registered = new Date();
     value.hide = true;
     this.users.unshift(value);

     this.form.reset();
   }
  }

}
