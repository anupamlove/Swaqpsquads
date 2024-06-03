import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterProductComponent } from 'src/app/component/register-product/register-product.component';

@Injectable({
  providedIn: 'root'
})
// export class RegisterProductGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }


export class RegisterProductGuard implements CanDeactivate<RegisterProductComponent> {
  canDeactivate(component: RegisterProductComponent): boolean {
    //  alert(component);
    
    if (component.productForm!.dirty){}

      return confirm('are u sure to navigate away');

    // return  false;
  }
  
}
