import { StyleSheet } from 'react-native';

const CheckboxStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginRight: 'auto',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginTop: 8,
  },
  label: {
    margin: 8,
  },
});

export default CheckboxStyles;
