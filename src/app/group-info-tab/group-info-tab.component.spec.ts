import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupInfoTabComponent } from './group-info-tab.component';

describe('GroupInfoTabComponent', () => {
  let component: GroupInfoTabComponent;
  let fixture: ComponentFixture<GroupInfoTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupInfoTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupInfoTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
