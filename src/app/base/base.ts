import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from '../services/user.service';
// import { NetworkService } from '../services/network.service';
// import { UtilityService } from '../services/utility.service';
// import { StorageService } from '../services/storage.service';

// Base Class containing all services for the app
export abstract class BasePage {
  public formBuilder: FormBuilder;
  public router: Router;
  // public utility: UtilityService;
  // public network: NetworkService;
  // public userService: UserService;
  // public storageService: StorageService;

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.router = injector.get(Router);
    // this.utility = injector.get(UtilityService);
    // this.network = injector.get(NetworkService);
    // this.userService = injector.get(UserService);
    // this.storageService = injector.get(StorageService);
  }
}
