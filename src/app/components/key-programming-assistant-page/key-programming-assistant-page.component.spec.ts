import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialog } from '@angular/material/dialog';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Subject, of } from 'rxjs';
import { AssistantHelper } from '../../helpers/assistant.helper';
import { AssistantActions, AssistantReducers } from '../../store/assistant';
import { AssistantWizardComponent } from '../assistant-wizard/assistant-wizard.component';
import { KeyProgrammingAssistantPageComponent } from './key-programming-assistant-page.component';
describe('KeyProgrammingAssistantPageComponent', () => {
  let component: KeyProgrammingAssistantPageComponent;
  let fixture: ComponentFixture<KeyProgrammingAssistantPageComponent>;
  let store: MockStore;
  let dialog: MatDialog;
  let dialogSpy: jasmine.Spy;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [KeyProgrammingAssistantPageComponent],
      providers: [
        provideMockStore({
          initialState: {},
          selectors: [{ selector: AssistantReducers.selectAssistantData, value: AssistantHelper.getAllAssistantFeatures() }]
        }),
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    dialog = TestBed.inject(MatDialog);
    spyOn(store, 'dispatch');
    spyOn(console, 'log');

    dialogSpy = spyOn(dialog, 'open')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dialogSpy.and.returnValue({ afterClosed: () => of(true) } as any);

    fixture = TestBed.createComponent(KeyProgrammingAssistantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch the action', () => {
    expect(store.dispatch).toHaveBeenCalledWith(AssistantActions.fetchAssistantData())
  })

  it('should open dialog when startAssistant is called', () => {
    component.startAssistant();
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should call onAssistantDismissed when dialog is closed', () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    const afterClosedSubject = new Subject<void>();
    dialogRefSpy.afterClosed.and.returnValue(afterClosedSubject.asObservable());
    dialogSpy.and.returnValue(dialogRefSpy);

    component.startAssistant();
    afterClosedSubject.next();

    expect(console.log).toHaveBeenCalledWith('Assistant is dismissed');
  });

  it('should open dialog when startAssistant is called', () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRefSpy.afterClosed.and.returnValue(of(true));
    dialogSpy.and.returnValue(dialogRefSpy);

    component.startAssistant();

    expect(dialog.open).toHaveBeenCalledWith(AssistantWizardComponent, {
      data: { name: 'name' },
      width: '600px',
      minHeight: '500px',
      panelClass: 'dialogC',
      disableClose: true,
    });
  });

});
