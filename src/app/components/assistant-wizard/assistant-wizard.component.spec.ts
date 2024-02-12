import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssistantWizardComponent } from './assistant-wizard.component';

describe('AssistantWizardComponent', () => {
  let component: AssistantWizardComponent;
  let fixture: ComponentFixture<AssistantWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssistantWizardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssistantWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
