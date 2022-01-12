import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule, IgxRadioModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule, IgxGridModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { AddPersonComponent } from './add-person/add-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleHomeComponent,
    EditPersonComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxListModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxRippleModule,
    FormsModule,
    IgxInputGroupModule,
    IgxDatePickerModule,
    IgxRadioModule,
    IgxSliderModule,
    IgxCheckboxModule,
    IgxDialogModule,
    IgxGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
