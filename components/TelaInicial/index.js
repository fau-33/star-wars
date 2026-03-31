import { Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./estilos";

const logo = require("../../assets/logo.jpg");

export default function TelaInicial(props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Star Wars</Text>
      
      <Image source={logo} style={styles.imagem} />

      <Text style={styles.titulo}>
        Qual a ordem cronológica?
      </Text>

      <Text style={styles.texto}>
        A franquia está dividida em três trilogias cinematográficas.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Tela Trilogia 1")}
      >
        <Text style={styles.btnTexto}>Ver 1ª Trilogia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Tela Trilogia 2")}
      >
        <Text style={styles.btnTexto}>Ver 2ª Trilogia</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => props.navigation.navigate("Tela Trilogia 3")}
      >
        <Text style={styles.btnTexto}>Ver 3ª Trilogia</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
