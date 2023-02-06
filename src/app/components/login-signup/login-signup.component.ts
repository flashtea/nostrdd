import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KeyManagementService } from '../../services/key.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent {
  privkey: string = '';

  constructor(private keyManagementService: KeyManagementService, private router: Router) { }

  ngOnInit() { }

  login() {
    if(this.privkey && this.keyManagementService.isValidPrivateKey(this.privkey)) {
      this.keyManagementService.setPrivKey(this.privkey);
      this.router.navigate(['/home']);
    } else {
      console.log("private key not valid")
      //TODO display error message
    }
  }

  generateKey() {
    this.privkey = this.keyManagementService.generatePrivateKey();
  }
}
