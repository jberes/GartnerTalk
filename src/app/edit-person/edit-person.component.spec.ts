import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule, IgxRadioModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule } from 'igniteui-angular';
import { EditPersonComponent } from './edit-person.component';

describe('EditPersonComponent', () => {
  let component: EditPersonComponent;
  let fixture: ComponentFixture<EditPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPersonComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxInputGroupModule, IgxDatePickerModule, IgxRadioModule, IgxSliderModule, IgxCheckboxModule, IgxDialogModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
