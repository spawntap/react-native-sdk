import { NativeModules } from 'react-native';

const { SpawnTapSDK: nativeBridge } = NativeModules;

type SpawnTapCallback = (...args: any[]) => void;

export class SpawnTapConfig {
  sdkKey = '';
  userId?: string;
  notificationsEnabled = true;

  constructor(sdkKey?: string) {
    if (sdkKey) {
      this.sdkKey = sdkKey;
    }
  }

  setSdkKey(sdkKey: string) {
    this.sdkKey = sdkKey;
  }

  setUserId(userId: string) {
    this.userId = userId;
  }

  enableNotifications(notificationsEnabled: boolean) {
    this.notificationsEnabled = notificationsEnabled;
  }
}

export const SpawnTapSDK = {
  init: (
    config: SpawnTapConfig,
    onSuccess: SpawnTapCallback = () => {},
    onFailure: SpawnTapCallback = () => {}
  ) => {
    nativeBridge.initializeSDK(
      {
        sdkKey: config.sdkKey,
        userId: config.userId ?? null,
        notificationsEnabled: config.notificationsEnabled,
      },
      onSuccess,
      onFailure
    );
  },
  open: (
    onSuccess: SpawnTapCallback = () => {},
    onFailure: SpawnTapCallback = () => {}
  ) => {
    nativeBridge.open(onSuccess, onFailure);
  },
};

export default SpawnTapSDK;
