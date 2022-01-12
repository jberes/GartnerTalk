import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxRippleModule } from 'igniteui-angular';
import { PeopleHomeComponent } from './people-home.component';

describe('PeopleHomeComponent', () => {
  let component: PeopleHomeComponent;
  let fixture: ComponentFixture<PeopleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleHomeComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxNavbarModule, IgxIconModule, IgxListModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxRippleModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
