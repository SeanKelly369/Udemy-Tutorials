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

  constructor() { }

  ngOnInit() {
    // setTimeout(()=> {

      this.users = [
        {
          firstName: 'John',
          lastName: 'King',
          age: 30,
          address: {
            street: '50 Main st',
            city: 'Boston',
            state: 'MA'
          },
          image: 'https://thechive.files.wordpress.com/2018/04/2469990-8.jpg?quality=85&strip=info&w=600'
        },
        {
          firstName: 'Kevin',
          lastName: 'Long',
          age: 25,
          address: {
            street: '20 Johnston st',
            city: 'Lynn',
            state: 'MA'
          },
          image: 'https://thechive.files.wordpress.com/2018/04/2469990-3.jpg?quality=85&strip=info&w=6002'
        },
        {
          firstName: 'Karen',
          lastName: 'Wallace',
          age: 22,
          address: {
            street: '23 Milf Lane',
            city: 'Miami',
            state: 'FL'
          },
          image: 'https://thechive.files.wordpress.com/2018/04/2469990-2.jpg?quality=85&strip=info&w=600'
        }
      ];
    //
      this.loaded = true;
    // }, 2000);

    // this.showExtended = false;

    this.addUser({
      firstName: 'David',
      lastName: 'McGowan',
      // age: 45,
      // address: {
      //   street: '107 Penny Lane',
      //   city: 'Charlotte',
      //   state: 'NC'
      // }

    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
