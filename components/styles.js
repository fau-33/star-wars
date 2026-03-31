import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: "center",
  },
  boxDescricao: {
    backgroundColor: '#1c1c1c',
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    width: '100%',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8, // for Android
    borderWidth: 1,
    borderColor: '#333'
  },
  titulo: {
    color: '#f3e344',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: "center",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  textos: {
    color: '#dcdcdc',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  imagem: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: "cover"
  },
});

export default styles;
