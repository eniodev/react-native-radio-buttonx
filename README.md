# react-native-radio-buttonx

customize your radio buttons easily

## Installation

```sh
npm install react-native-radio-buttonx
```

## Usage

```js
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import { RadioButtons } from './RadioButtonx';


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
  display: 'row',
  //defaultColor: 'gray',
  //selectedColor: 'brown',
  //fontWeight: 'bold',
  //fontSize: 20,
  //fontStyle: 'italic',
  //color: 'brown'
}
// ...
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with :heart: by [Énio Carlos](https://twitter.com/eniocarlosao)
