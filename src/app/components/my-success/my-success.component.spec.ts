import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySuccessComponent } from './my-success.component';

describe('MySuccessComponent', () => {
  let component: MySuccessComponent;
  let fixture: ComponentFixture<MySuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
