import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { KeyManagementService } from '../../services/key.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router, private keyManagementService: KeyManagementService) {}

  canActivate(): boolean {
    // Check if the user's private key is stored
    const privKey = this.keyManagementService.getPrivKey();
    if (!privKey) {
      // If the user's private key is not stored, redirect them to the login page
      this.router.navigate(['/login']);
      return false;
    }

    // If the user's private key is stored, allow access to the component
    return true;
  }
}
