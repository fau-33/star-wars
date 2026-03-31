import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    padding: 20
  },
  titulo: {
    color: '#f3e344',
    fontSize: 26,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: "center",
    textTransform: "uppercase"
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 30,
    textAlign: "center",
  },
  imagem: {
    width: 280,
    height: 180,
    borderRadius: 15,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#f3e344'
  },
  botao: {
    backgroundColor: '#111',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#f3e344',
  },
  btnTexto: {
    color: '#f3e344',
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase"
  }
});

export default styles;
