import { Text, View, Image, ScrollView, StyleSheet } from "react-native";
import styles from "./styles.js";
import ButtonNavigasi from "./components/ButtonNavigasi.tsx";
import ViewImage from "./components/ViewImage.tsx";
import CardBerita from "./components/CardBerita.tsx";

export default function App() {
  const newsData = [
    {
      id: 1,
      judul: "Judul 1",
      isi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae eros eget tellus tristique bibendum.",
    },
    {
      id: 2,
      judul: "Judul 2",
      isi: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    },
    {
      id: 3,
      judul: "Judul 3",
      isi: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 4,
      judul: "Judul 4",
      isi: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: "#f5f5f5" }}>
      {/* Heading */}
      <Text style={styles.heading}>News App</Text>

      {/* Horizontal ScrollView for Images */}
     <ViewImage/>

      {/* Navigation Buttons */}
     <ButtonNavigasi/>

      {/* Mapping News Data */}
      {newsData.map((item, index) => (
       <CardBerita key={index} judul={item.judul} isi={item.isi}/>
      ))}
    </ScrollView>
  );
}
