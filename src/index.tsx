import { NativeModules } from 'react-native';

const { SpawnTapSDK: nativeBridge } = NativeModules;

type SpawnTapCallback = (...args: any[]) => void;

export class SpawnTapConfig {
  sdkKey = '';
  userId?: string;

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
