export type AssistantPageData = {
  id: 'keyReplacementAssistant' | 'batchKeyDuplication';
  name: string;
  content: string;
  isAvailable: boolean;
}

export type KeyReplacementWizardStatus = 'NO_WIZARD' | 'SELECT_DEVICE' | 'KEY_INVALIDATION' | 'PROGRAM_DEVICE' | 'DEVICE_READY';
