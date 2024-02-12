import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProgrammingComponent } from './key-programming.component';

describe('KeyProgrammingComponent', () => {
  let component: KeyProgrammingComponent;
  let fixture: ComponentFixture<KeyProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyProgrammingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
