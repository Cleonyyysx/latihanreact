// Suggested code may be subject to a license. Learn more: ~LicenseLog:875551168.
import {Text, View,Image, ScrollView} from 'react-native';
import styles from '../styles.js';

function ViewImage(){
    return ( <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.gambarScroll}>
      <Image style={styles.gambarHeading} source={require("../images/profile.jpg")} />
      <Image style={styles.gambarHeading} source={require("../images/profile.jpg")} />
      <Image style={styles.gambarHeading} source={require("../images/profile.jpg")} />
    </ScrollView>);
  }
;
export default ViewImage;