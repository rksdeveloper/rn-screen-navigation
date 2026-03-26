
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container} 
    >
      <Text style={textStyles.text1}>Welcome to Trackza</Text>
      <Text style={textStyles1.text2}>Kharcha Likho Baki Trackza Smjhega</Text>
      <Link href="/about">visit About Screen</Link>
      <Link href={"/splashScreen"}>visit SplashScreen</Link>
      <Link href={"/loginScreen"}>Visit loginScreen</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#fff',
   gap:30
    
  }
})
const textStyles = StyleSheet.create({
  text1:{
    fontSize:30,
    color:'black',
    // backgroundColor:'#175b70'
  }
})
const textStyles1 = StyleSheet.create({
  text2:{
    fontSize: 16,
    color: 'grey',
    // backgroundColor:'#FFF'
  }
})