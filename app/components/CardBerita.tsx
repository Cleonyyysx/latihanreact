import {Text, View, Image} from 'react-native';
import styles from '../styles.js';



function CardBerita({ judul, isi }) {
    return(
      <View style={styles.containerCard}>
       <Image style={styles.cardImage} source={require("../images/profile.jpg")} />
      <Text style={styles.judulBerita}>{judul}</Text>
      <Text style={styles.isiBerita}>{isi}</Text>
    </View>
    );
  }
  
export default CardBerita;