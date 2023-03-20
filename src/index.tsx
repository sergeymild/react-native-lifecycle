import {
  AppState,
  AppStateStatus,
  NativeEventEmitter,
  NativeModules,
  Platform,
} from 'react-native';

const AndroidAppState =
  Platform.OS === 'android'
    ? new NativeEventEmitter(NativeModules.Lifecycle)
    : undefined;

class _AppState {
  static addListener(callback: (state: 'active' | 'background') => void) {
    if (Platform.OS === 'ios') {
      return AppState.addEventListener('change', (state) => {
        console.log('🚰 [UseActiveState.change]', state);
        if (state === 'active' || state === 'background') callback(state);
      });
    }
    return AndroidAppState!.addListener('change', (state) => {
      console.log('🚰 [UseActiveState.change]', state[0]);
      callback(state[0]);
    });
  }
}

export function subscribeOnAppLifecycle(
  state: AppStateStatus[],
  callback: (state: AppStateStatus) => void
) {
  return _AppState.addListener((nextAppState: AppStateStatus) => {
    if (state.includes(nextAppState)) {
      callback(nextAppState);
    }
  });
}
