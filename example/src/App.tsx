import { Button, Text, View, StyleSheet } from 'react-native';
import SpawnTapSDK, { SpawnTapConfig } from '@spawntap/react-native-sdk';

export default function App() {
  const openSpawnTap = () => {
    const config = new SpawnTapConfig();
    config.setSdkKey('SDK_KEY');
    config.setUserId('USER_ID');

    SpawnTapSDK.init(
      config,
      () => {
        SpawnTapSDK.open();
      },
      (code, message) => {
        console.warn(code, message);
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text>SpawnTap React Native SDK</Text>
      <Button title="Open SpawnTap" onPress={openSpawnTap} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
