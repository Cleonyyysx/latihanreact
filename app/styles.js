import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    heading: {
      fontSize: 32,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      color: "#333",
    },
    gambarScroll: {
      marginVertical: 10,
    },
    gambarHeading: {
      width: 300,
      height: 200,
      borderRadius: 8,
      elevation: 3,
      marginRight: 10,
    },
    containerNavigasi: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 15,
      marginHorizontal: 10,
    },
    buttonNavigasi: {
      backgroundColor: "blue",
      color: "white",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
      fontWeight: "bold",
      textAlign: "center",
    },
    containerCard: {
      backgroundColor: "white",
      marginVertical: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      elevation: 2,
      padding: 10,
    },
    cardImage: {
      width: "100%",
      height: 200,
      borderRadius: 8,
      marginBottom: 10,
    },
    judulBerita: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      marginBottom: 5,
    },
    isiBerita: {
      fontSize: 14,
      color: "#777",
      lineHeight: 20,
    },
  });
  
  
export default styles;