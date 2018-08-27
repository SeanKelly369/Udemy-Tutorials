import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable()
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'King',
        email: 'john@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Long',
        email: 'Kevin@gmail.com',
        isActive: true,
        registered: new Date('03/11/2017 06:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Wallace',
        email: 'Karen@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    console.log('where is it?');
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
