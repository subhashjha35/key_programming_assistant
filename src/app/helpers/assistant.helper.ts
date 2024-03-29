import { AssistantPageData } from '../types/assistant';

export class AssistantHelper {
  static readonly assistantFeatures: Array<AssistantPageData> = [
    {
      id: 'keyReplacementAssistant',
      name: 'Key replacement assistant',
      content: `when user requires a key to be replaced (key has a physical damage and cannot
      be repaired), a locking system administrator needs to perform a number of special operations in order to
      successfully migrate user data to a new device. Administrator needs to invalidate the current device (long
      running operation ~ 3 sec), create a duplicate of this device with a new name and program the new device
      (long running operation ~ 5 sec). All these actions are connected together in the key replacement assistant,
      administrator can open this assistant, select the key and start the replacement process.`,
      isAvailable: true,
    },
    {
      id: 'batchKeyDuplication',
      name: 'Batch key duplication assistant',
      content: `when administrator needs to create multiple users for a building, he/she
      needs to perform manual configurations for each user (location, access times, key type, etc.). In order to
      simplify this process, the batch key duplication assistant was introduced. The administrator now can configure
      only one key manually and duplicate this configuration for as many users as required. In this assistant,
      administrator needs to enter an amount of duplications to perform, then provide a new name for each
      duplicated key and program a new hardware device for it.`,
      isAvailable: false,
    },
  ];

  static readonly getAllAssistantFeatures = () => this.assistantFeatures;
}
