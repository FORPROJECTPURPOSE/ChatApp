import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiketListComponent } from './tiket-list.component';

describe('TiketListComponent', () => {
  let component: TiketListComponent;
  let fixture: ComponentFixture<TiketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiketListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
