import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserAddComponent } from './user/user-add/user-add.component';

export const routes: Routes = [
    {path: "user", component: UserComponent},
    {path: 'user/add', component: UserAddComponent},
    {path: '', component: UserComponent}

];
