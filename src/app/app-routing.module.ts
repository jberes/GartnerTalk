import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';

export const routes: Routes = [
  { path: '', redirectTo: 'people-home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'people-home', component: PeopleHomeComponent, data: { text: 'People Home' } },
  { path: 'edit-person', component: EditPersonComponent, data: { text: 'Edit Person' } },
  { path: 'add-person', component: AddPersonComponent, data: { text: 'Add Person' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
