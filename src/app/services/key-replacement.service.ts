import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Injectable({providedIn: 'root'})
export class KeyReplacementService {
  devices = [
    { id: 'device1', name: 'Device 1' },
    { id: 'device2', name: 'Device 2' },
  ]
  getDevices(): Array<{ id: string; name: string}> {
    return this.devices;
  }

  setNewDeviceName(data: { id: string; name: string }): void {
    this.devices = this.devices.map((device) => (device.id === data.id) ? { id: device.id, name: data.name } : device)
  }

  invalidateDevice = (): Observable<boolean> => {
    return timer(5000).pipe(map(() => true))
  }

  programDevice = (): Observable<boolean> => {
    return timer(3000).pipe(map(() => true));
  }
}
