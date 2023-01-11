import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function InputLabel(props) {
    return(
        <View
        style={{
        marginTop: 15,
        }}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
            placeholder={props.placeholder}
            style={styles.input}
            secureTextEntry={props.secure} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
      fontSize: 14,
      marginBottom: 11,
      fontWeight: 'bold',
      color: 'black',
      textAlign: 'left'
    },
    input: {
      borderRadius: 88,
      paddingVertical: 10,
      paddingLeft: 23,
      width: 300,
      backgroundColor: 'rgba(99, 99, 99, 0.1)',
    }
  });