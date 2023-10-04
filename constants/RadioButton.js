import RadioForm from 'react-native-simple-radio-button';

export default function ReactSimpleButton() {
  const [chosenOption, setChosenOption] = useState('apple'); //will store our current user options
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Samsung', value: 'samsung' },
  ]; //create our options for radio group
  return (
    <View>
      <Text> {chosenOption}</Text>
      <RadioForm
        radio_props={options}
        initial={0} //initial value of this group
        onPress={(value) => {
          setChosenOption(value);
        }} //if the user changes options, set the new value
      />
    </View>
  );
}