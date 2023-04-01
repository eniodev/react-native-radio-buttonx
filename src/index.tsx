import { 
  Text, 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Pressable 
} from 'react-native';
import React from 'react';

//display options 
type display = 'row' | 'column';
type fontStyle = 'normal' | 'italic';
type fontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';


interface RadioProps {
  gap?: number | string,
  options: string[],
  selectedOption: string,
  onSelect: (option: string) => void,
  SelectorComponent?: React.ElementType<any>
  styleOptions?: {
    rounded?: true | false,
    radio?: number, 
    display?:  display,
    defaultColor?: string,
    selectedColor?: string,
    color?: string,
    fontSize?: number,
    fontStyle?: fontStyle,
    fontWeight?: fontWeight,
  }
}

export const RadioButtons: React.FC<RadioProps> = (props) => {
  
  const {
    gap,
    options, 
    selectedOption, 
    onSelect, 
    SelectorComponent,
    styleOptions 
  } = props;

  
  const [selected, setSelected] = React.useState(selectedOption);

  const handleSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
  };

  return (
    <View style={
      [styles.container, 
      {
        flexDirection: styleOptions?.display,
        
      }]}
      >

      {options.map((option) => (
        <Pressable
          key={option}
          style={
            [styles.pressableArea, 
            {
              paddingHorizontal: styleOptions?.display === 'row' && gap ? gap : 0,
              paddingVertical: styleOptions?.display === 'column' && gap ? gap : 0
            }]}
          onPress={() => handleSelect(option)}
        >
          <TouchableOpacity
            style={
              [styles.selector, 
              {
                borderColor: selected === option ? 
                styleOptions?.selectedColor ? styleOptions.selectedColor : '#4191E1'  
                : 
                styleOptions?.defaultColor? styleOptions.defaultColor : '#BBBBBB',
                borderWidth: SelectorComponent ? 0 : 2,
                borderRadius: styleOptions?.rounded && !SelectorComponent ? styleOptions.radio : 0,
                width: styleOptions?.radio ? styleOptions.radio : 20,
                height: styleOptions?.radio ? styleOptions.radio : 20
              }]}
            onPress={() => handleSelect(option)}
          >
            {selected === option && (
               SelectorComponent 
               ?
               <SelectorComponent />
               :
               <View style={styles.selector}>
                <View 
                style={{ 
                  backgroundColor: styleOptions?.selectedColor ? styleOptions.selectedColor : '#4191E1' , 
                  width: styleOptions?.radio ? styleOptions.radio - 10 : 10, 
                  height: styleOptions?.radio ? styleOptions.radio - 10 : 10, 
                  borderRadius: styleOptions?.rounded && !SelectorComponent ? styleOptions.radio : 0
                  }}>
                </View>
               </View>
            )}
          </TouchableOpacity>
          <Text style={
            [styles.option, 
            {
              color: styleOptions?.color ? styleOptions.color : '#000000',
              fontSize: styleOptions?.fontSize ? styleOptions.fontSize : 14,
              fontStyle: styleOptions?.fontStyle ? styleOptions.fontStyle : 'normal',
              fontWeight: styleOptions?.fontWeight ? styleOptions.fontWeight : '400',
            }]}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  pressableArea: {
    flexDirection: 'row', 
    alignItems: 'center'
  },
  selector: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    marginLeft: 4, 
  }

})

