import { Component, OnInit } from '@angular/core';
import { User } from '../../../core/interfaces/user.interface';
import { UsersService } from '../../../core/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  public dataSource$: User[] = [];
  public userId: string | number = 0;
  public dataUser$: any = [];
  public userEmail: string | null = '';

  constructor(private usersService: UsersService) {}
  ngOnInit(): void {
    this.userEmail = localStorage.getItem('email');
    this.usersService.get().subscribe((a) => this.userSelect(a));
    // this.usersService
    //   .getByEmail(this.userEmail)
    //   .subscribe((r) => console.log('r', r));
  }

  async userSelect(a: User[]): Promise<void> {
    this.dataSource$ = a;
    this.dataSource$.forEach((e) => {
      if (e.email == this.userEmail) {
        this.dataUser$ = e;
      }
    });
  }
}
