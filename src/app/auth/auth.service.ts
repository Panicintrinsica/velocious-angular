import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>

  constructor() { }
}
