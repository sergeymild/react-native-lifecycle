# react-native-lifecycle

React Native Lifecycle

## Installation

```sh
"react-native-lifecycle":"sergeymild/react-native-lifecycle#1.0.2"
```

## Usage

```js
import { subscribeOnAppLifecycle } from 'react-native-lifecycle';

// ...

React.useEffect(() => {
    return subscribeOnAppLifecycle(
      ['active', 'background', 'inactive'],
      (state) => {
        console.log('[App.]', state);
      }
    ).remove;
}, []);
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
