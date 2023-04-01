# react-native-radio-buttonx

Create radio buttons with a range of styles and customize the radio button selector using your own custom component. This package is perfect for developers who need to create visually appealing and interactive radio buttons in their mobile applications

![Demo Image](/radio-buttonx.png)

## Installation

```sh
npm install react-native-radio-buttonx
```

## Usage

```js
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { RadioButtons } from 'react-native-radio-buttonx';


const foo = () => {
  return (
    <Image source={require('./assets/favicon.png')}  style={{width: 12, height: 12}}/>
    //<Text>✅</Text>
  )
}

export default function App() {

  const [selectedOption, setSelectedOption] = useState('Apple');
  
  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={{marginBottom: 40}}>Selected: {selectedOption}</Text>
      
      <RadioButtons
          gap={19}
          options={['Apple','Orange','Banana']}
          selectedOption={selectedOption}
          onSelect={handleSelect}
          styleOptions={styleOptions}
          //SelectorComponent={foo}

          />

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


const styleOptions = {
  rounded: true,
  radio: 20,
  display: 'column',
  //defaultColor: 'gray',
  //selectedColor: 'brown',
  //fontWeight: 'bold',
  //fontSize: 20,
  //fontStyle: 'italic',
  //color: 'brown'
}
// ...
```
## Props

The `RadioButtons` component accepts the following props:

| Property | Type | Required | Description |
| --- | --- | --- | --- |
| options | `Array<string>` | Yes | An array of options to be displayed as radio buttons |
| selectedOption | `string` | Yes | The currently selected option |
| onSelect | `(option: string) => void` | Yes | A function to be called when an option is selected |
| gap | `number` | No | The gap between the radio buttons |
| styleOptions | `StyleOptions` | No | An object containing style options for the radio buttons |
| SelectorComponent | `React.ComponentType` | No | A custom component to be used as the selector for the radio buttons |

The `StyleOptions` type is defined as follows:

```typescript
type StyleOptions = {
  rounded?: boolean;
  radio?: number;
  display?: 'row' | 'column';
  defaultColor?: string;
  selectedColor?: string;
  fontWeight?: string;
  fontSize?: number;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  color?: string;
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

If you find this project helpful, please consider buying me a coffee.

<a href="https://www.buymeacoffee.com/eniodev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" height="41" width="174"></a>

## License

MIT

---

Made with :heart: by [Énio Carlos](https://twitter.com/eniocarlosao)
