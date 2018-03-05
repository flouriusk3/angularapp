import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
    this.users = [
      // User 1
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 70,
        address: {
          street: 'One Main St.',
          city: 'Houston',
          state: 'TX'
        },
        image:'http://lorempixel.com/600/600/people/3',
        isActive: true
      },
      // User 2
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        age: 34,
        address: {
          street: '20 N. Main St.',
          city: 'Houston',
          state: 'TX'
        },
        image:'http://lorempixel.com/600/600/people/2',
        isActive: false
      },
      // User 3
      {
        firstName: 'Karen',
        lastName: 'Williams',
        age: 26,
        address: {
          street: '55 Mill St.',
          city: 'Houston',
          state: 'TX'
        },
        image:'http://lorempixel.com/600/600/people/1',
        isActive: true
      }

    ];

    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();

    /*this.addUser({
      firstName: 'David',
      lastName: 'Jackson',
      age: 23,
      address: {
        street: '23 Lynn St.',
        city: 'Houston',
        state: 'TX'
      }
    });*/

 
  }

  addUser(user: User){
    this.users.push(user);
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
