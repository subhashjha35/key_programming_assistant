import { AsyncPipe } from '@angular/common';
import { AfterViewInit, Component, ComponentRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { KeyReplacementActions, KeyReplacementReducers } from '../../store/key-replacement';
import { DeviceSelectionComponent } from './steps/device-selection/device-selection.component';
import { KeyDuplicationComponent } from './steps/key-duplication/key-duplication.component';
import { KeyInvalidationComponent } from './steps/key-invalidation/key-invalidation.component';
import { KeyProgrammingComponent } from './steps/key-programming/key-programming.component';
import { KeyResultComponent } from './steps/key-result/key-result.component';
@Component({
  selector: 'app-assistant-wizard',
  standalone: true,
  imports: [MatDialogModule, MatSelectModule, MatButtonModule, MatIconModule, AsyncPipe],
  templateUrl: './assistant-wizard.component.html',
  styleUrl: './assistant-wizard.component.scss'
})
export class AssistantWizardComponent implements AfterViewInit {
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ref!: ComponentRef<DeviceSelectionComponent | KeyInvalidationComponent>

  store = inject(Store);
  dialog = inject(MatDialog);

  deviceSelected = false;

  wizardSteps = [
    DeviceSelectionComponent,
    KeyInvalidationComponent,
    KeyDuplicationComponent,
    KeyProgrammingComponent,
    KeyResultComponent
  ]
  currentStep: number = 0;
  btnText = '';

  isAnyProgress$ = this.store.select(KeyReplacementReducers.selectKeyReplacementStatusLoading);

  ngAfterViewInit(): void {
    this.currentStep = 0;
    this.ref = this.vcr.createComponent(DeviceSelectionComponent);
  }

  setDevice(deviceId: string): void {
    this.store.dispatch(KeyReplacementActions.selectDevice({ deviceId }))
  }

  next(): void {
    this.deviceSelected = true;
    this.vcr.remove();

    if (this.currentStep === this.wizardSteps.length - 2) {
      this.btnText = 'Finish';
    }

    if (this.currentStep < this.wizardSteps.length - 1) {
      this.currentStep++;
      this.ref = this.vcr.createComponent(this.wizardSteps[this.currentStep]);
    } else {
      this.dialog.closeAll();
    }
  }
}
