import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { UserComponent } from "src/app/user/user.component";
import { componentFactoryName } from "@angular/compiler";

export class ConfirmGuard implements CanDeactivate<UserComponent> {
  canDeactivate(): boolean {
    return window.confirm("are you sure you want to navigate?");
  }
}
