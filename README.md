# @spawntap/react-native-sdk

Spawntap's playtime SDK

### 1. Add the SDK as a dependency


```sh
npm install @spawntap/react-native-sdk
```


### 2. Initialise the SDK


```js
import SpawnTapSDK, { SpawnTapConfig } from '@spawntap/react-native-sdk';

const config = new SpawnTapConfig();
config.setSdkKey('SDK_KEY');
// Make sure to initialize again if the userId changes.
config.setUserId('USER_ID');

SpawnTapSDK.init(
  config,
  () => {
    // SDK initialized successfully.
  },
  (code, message) => {
    console.warn(code, message);
  }
);
```

### 3. Open the Offerwall

```js
SpawnTapSDK.open(
  () => {
    // Offerwall opened successfully.
  },
  (code, message) => {
    console.warn(code, message);
  }
);
```
