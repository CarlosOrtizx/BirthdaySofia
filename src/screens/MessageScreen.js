import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function MessageScreen({ onBack }) {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Título principal */}
      <View style={styles.header}>
        <Text style={styles.title}>Claudia Sofía López</Text>
        <Text style={styles.paragraphHighlight}>Feliz Cumpleaños</Text>
      </View>

      <View style={styles.messageContainer}>
        <Text style={styles.paragraph}>
          Soy yo... Carlos. Hoy, en este día tan especial para ti, te quería regalar este lindo recuerdo y desearte un feliz cumpleaños, a ti, la persona que me hace feliz. Sé que no nos conocemos mucho, pero por lo poco que te conozco estos últimos meses, me has demostrado que eres una de las personas más sanas, valientes, guerreras y leales que he conocido.
        </Text>

        {/* Foto 1 */}
        <Image source={require('../../assets/img/img1.jpg')} style={styles.image} />

        <Text style={styles.paragraph}>
          Y quién lo diría, ¿no? Jajaja, fue en una aplicación donde no hay muchas personas como tú. Quiero decirte que eres única y que todo esfuerzo que haces para que los tuyos estén bien, ellos lo valoran muchísimo y nunca lo dejarán de hacer. Nunca te rindas por tus sueños, nunca agaches la cabeza y sobre todo nunca digas "No puedo". 
        </Text>

        {/* Foto 2 */}
        <Image source={require('../../assets/img/img2.jpg')} style={styles.image} />

        <Text style={styles.paragraph}>
          Tienes una actitud muy linda. Gracias por compartir vivencias, recuerdos y problemas conmigo; cada vez que me acuerdo de lo que me contaste de cuando se dañó el televisor por colgarse de él, me río y me imagino la escena.
        </Text>

        {/* Foto 3 */}
        <Image source={require('../../assets/img/img3.jpg')} style={styles.image} />

        <Text style={styles.paragraph}>
          Te pido perdón si te he llegado a hacer daño. Sé que lo que hice es imperdonable y me duele verte mal por eso. Sé que la confianza ya no es la misma y es comprensible tu decisión; solo te pido y te aseguro que en mí puedes confiar.
        </Text>

        {/* Foto 4 */}
        <Image source={require('../../assets/img/img4.jpg')} style={styles.image} />

        <Text style={styles.paragraph}>
          Para terminar, te deseo un feliz cumpleaños rodeada de las personas que te aman y te quieren. Que todos ellos y tú tengan mucha salud y bienestar. Solo cosas buenas te deseo. Gracias por estar y existir.
        </Text>

        <Text style={styles.paragraphHighlight}>
          Que Dios te bendiga siempre, "mi niña".
        </Text>

        <Text style={styles.signature}>
          Con cariño,{"\n"}Carlos Enrique Ortiz
        </Text>
      </View>

      {/* Botón para volver */}
      <TouchableOpacity style={styles.btnBack} onPress={onBack}>
        <Text style={styles.btnBackText}>Volver</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#050505' }, // Negro más profundo
  header: { paddingTop: 40, paddingHorizontal: 24, alignItems: 'center', marginBottom: 20 },
  title: { fontSize: 32, fontFamily: 'DancingScript_700Bold', color: '#DC2626', textAlign: 'center' },
  subtitle: { fontSize: 18, fontFamily: 'Montserrat_400Regular', color: '#8B5CF6', marginTop: 5, letterSpacing: 2 },
  
  messageContainer: { paddingHorizontal: 24, paddingBottom: 20 },
  
  image: { 
    width: '100%', 
    height: 250, 
    borderRadius: 16, 
    marginVertical: 20,
    borderWidth: 2, 
    borderColor: '#8B5CF6',
    resizeMode: 'cover'
  },
  
  paragraph: { 
    fontSize: 15, 
    color: '#D1D5DB', 
    lineHeight: 26, 
    marginBottom: 10, 
    textAlign: 'justify',
    fontFamily: 'Montserrat_400Regular'
  },
  
  paragraphHighlight: { 
    fontSize: 18, 
    color: '#A78BFA', 
    marginTop: 10,
    marginBottom: 20, 
    textAlign: 'center',
    fontFamily: 'DancingScript_700Bold'
  },
  
  signature: { 
    fontSize: 22, 
    color: '#DC2626', 
    textAlign: 'right', 
    marginBottom: 40,
    fontFamily: 'DancingScript_700Bold'
  },
  
  btnBack: { 
    alignSelf: 'center', 
    paddingVertical: 14, 
    paddingHorizontal: 30, 
    backgroundColor: '#111111', 
    borderRadius: 30, 
    borderWidth: 2, 
    borderColor: '#DC2626', 
    marginBottom: 50 
  },
  btnBackText: { 
    color: '#FFFFFF', 
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 14
  },
});