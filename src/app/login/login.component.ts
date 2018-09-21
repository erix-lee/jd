import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { TdLoadingService } from '@covalent/core/loading';

@Component({
  selector: 'qs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private _router: Router,
    private _loadingService: TdLoadingService) { }

  login(): void {
    this._loadingService.register();
    let role = { name: "guest", display: "访客", home: "/" };

    if (this.username.startsWith("1")) {
      role.name = "admin";
      role.display = "管理员";

    } else if (this.username.startsWith("2")) {
      role.name = "director";
      role.display = "科研室主任";


    } else if (this.username.startsWith("3")) {
      role.name = "chief";
      role.display = "课程组组长";

    } else if (this.username.startsWith("4")) {
      role.name = "teacher";
      role.display = "课程组教师";


    } else if (this.username.startsWith("5")) {
      role.name = "student";
      role.display = "学生";
     
    };

    setTimeout(() => {
      alert('模拟延迟0.7秒登录：账号= ' + this.username + "，角色=" + role.name + "\/" + role.display);
      this._router.navigate([role.name]);
      this._loadingService.resolve();
    }, 700);
  }
}
