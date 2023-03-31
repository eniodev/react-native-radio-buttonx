# react-native-radio-buttonx

customize your radio buttons easily

## Installation

```sh
npm install react-native-radio-buttonx
```

## Usage

```js
import { StyleSheet, Text, View } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttonx';
import React from 'react';

export default function App() {

  const [selectedOption, setSelectedOption] = React.useState('Banana');
  
  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text>React Native Radio Buttons</Text>
      <RadioButtons
          options={['Banana', 'Apple', 'Orange']}
          selectedOption={selectedOption}
          onSelect={handleSelect}
        />

      <Text>Selected: {selectedOption}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with :heart: by [Énio Carlos](https://twitter.com/eniocarlosao)
