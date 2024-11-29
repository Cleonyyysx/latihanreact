import {Text, View} from 'react-native';
import styles from '../styles.js';

function ButtonNavigasi() {
    return (
      <View style={styles.containerNavigasi}>
        <Text style={styles.buttonNavigasi}>PREVIOUS</Text>
        <Text style={styles.buttonNavigasi}>NEXT</Text>
      </View>
    );
  }

export default ButtonNavigasi;