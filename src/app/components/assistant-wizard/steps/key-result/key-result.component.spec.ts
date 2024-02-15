import { ComponentFixture, TestBed } from "@angular/core/testing";
import { provideMockStore } from "@ngrx/store/testing";
import { KeyReplacementService } from "../../../../services/key-replacement.service";
import { KeyReplacementReducers } from "../../../../store/key-replacement";
import { KeyResultComponent } from "./key-result.component";

describe('KeyResultComponent', () => {
  let component: KeyResultComponent;
  let fixture: ComponentFixture<KeyResultComponent>;
  let keyReplacementServiceSpy: jasmine.SpyObj<KeyReplacementService>;
  beforeEach(() => {
    keyReplacementServiceSpy = jasmine.createSpyObj<KeyReplacementService>('keyReplacementServiceSpy', [
      'getDevices'
    ])
    TestBed.configureTestingModule({
      providers:[
        { provide: KeyReplacementService, useValue: keyReplacementServiceSpy },
        provideMockStore({
          initialState: {},
          selectors: [
            { selector: KeyReplacementReducers.selectSelectedDeviceId, value: 'd1' }
          ]
        })
      ]
    }).compileComponents()
    keyReplacementServiceSpy.getDevices.and.returnValue([{ id: 'd1', name: 'dev1' }])
    fixture = TestBed.createComponent(KeyResultComponent);
    component = fixture.componentInstance;
  })

  afterEach(() => fixture.destroy())

  it('should set the value to deviceName from store', () => {
    component.ngOnInit();

    component.deviceName$.subscribe((devName) => {
      expect(devName).toEqual('dev1');
    })
  })
})
