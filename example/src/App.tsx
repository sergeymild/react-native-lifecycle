import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { subscribeOnAppLifecycle } from 'react-native-lifecycle';

export default function App() {
  React.useEffect(() => {
    return subscribeOnAppLifecycle(
      ['active', 'background', 'inactive'],
      (state) => {
        console.log('[App.]', state);
      }
    ).remove;
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
