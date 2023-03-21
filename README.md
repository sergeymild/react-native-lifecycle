# react-native-lifecycle

React Native Lifecycle

## Installation

```sh
"react-native-lifecycle":"sergeymild/react-native-lifecycle#1.0.1"
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

### Android
if you will see some kind of errors:
Duplicate class in Kotlin Android...
```
// in `app/build.gradle`
dependencies {
    constraints {
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.8.0") {
          because("kotlin-stdlib-jdk7 is now a part of kotlin-stdlib")
        }
        implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8:1.8.0") {
          because("kotlin-stdlib-jdk8 is now a part of kotlin-stdlib")
        }
    }
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
