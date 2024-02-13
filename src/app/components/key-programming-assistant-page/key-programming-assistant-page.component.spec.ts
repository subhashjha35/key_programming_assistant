import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyProgrammingAssistantPageComponent } from './key-programming-assistant-page.component';

describe('KeyProgrammingAssistantPageComponent', () => {
  let component: KeyProgrammingAssistantPageComponent;
  let fixture: ComponentFixture<KeyProgrammingAssistantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyProgrammingAssistantPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyProgrammingAssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
