import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { KeyReplacementService } from '../../services/key-replacement.service';
import { KeyReplacementActions, KeyReplacementReducers } from '../../store/key-replacement';
import { DeviceSelectionComponent } from './steps/device-selection/device-selection.component';
import { KeyDuplicationComponent } from './steps/key-duplication/key-duplication.component';
import { KeyInvalidationComponent } from './steps/key-invalidation/key-invalidation.component';
import { KeyProgrammingComponent } from './steps/key-programming/key-programming.component';
import { KeyResultComponent } from './steps/key-result/key-result.component';
@Component({
  selector: 'app-assistant-wizard',
  standalone: true,
  imports: [
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe,
    NgIf,
  ],
  templateUrl: './assistant-wizard.component.html',
  styleUrl: './assistant-wizard.component.scss',
})
export class AssistantWizardComponent implements AfterViewInit, OnInit {
  @ViewChild('viewContainerRef', { read: ViewContainerRef }) vcr!: ViewContainerRef;
  ref!: ComponentRef<DeviceSelectionComponent | KeyInvalidationComponent>;

  store = inject(Store);
  dialog = inject(MatDialog);
  cdr = inject(ChangeDetectorRef);

  keyReplacementService = inject(KeyReplacementService);

  devices: Array<{ id: string; name: string }> = [];

  deviceSelected = false;

  wizardSteps = [
    DeviceSelectionComponent,
    KeyInvalidationComponent,
    KeyDuplicationComponent,
    KeyProgrammingComponent,
    KeyResultComponent,
  ];
  currentStep: number = 0;
  btnText$ = new Subject<string>();

  isAnyProgress$ = this.store.select(KeyReplacementReducers.selectKeyReplacementStatusLoading);

  ngOnInit(): void {
    this.getDevices();
    this.currentStep = 0;
  }

  ngAfterViewInit(): void {
    this.ref = this.vcr.createComponent(DeviceSelectionComponent);
  }

  getDevices(): void {
    this.devices = this.keyReplacementService.getDevices();
  }

  setDevice(deviceId: string): void {
    this.store.dispatch(KeyReplacementActions.selectDevice({ deviceId }));
    this.getDevices();
  }

  next(): void {
    this.vcr.remove();

    this.deviceSelected = true;

    if (this.currentStep === this.wizardSteps.length - 2) {
      this.btnText$.next('Finish');
    }

    if (this.currentStep < this.wizardSteps.length - 1) {
      this.currentStep++;
      this.ref = this.vcr.createComponent(this.wizardSteps[this.currentStep]);
      this.cdr.detectChanges();
    } else {
      this.dialog.closeAll();
    }
  }
}
