import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Icono de corazón

export default function IntroScreen({ onEnter }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animación de latido
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.1, duration: 800, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
      ])
    ).start();
  }, [scaleAnim]);

  return (
    <View style={styles.container}>
      <Text style={styles.textoArriba}>Para ti...</Text>
      
      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
        <TouchableOpacity onPress={onEnter} activeOpacity={0.8} style={styles.heartWrapper}>
          {/* Corazón dibujado con un icono */}
          <FontAwesome name="heart" size={260} color="#DC2626" style={styles.heartIcon} />
          
          {/* Texto superpuesto en el centro del corazón */}
          <View style={styles.textContainer}>
            <Text style={styles.heartText}>Feliz</Text>
            <Text style={styles.heartText}>cumpleaños,</Text>
            <Text style={styles.heartName}>Sofía</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.textoArriba}>Toca el corazón</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' },
  textoArriba: { color: '#A78BFA', fontSize: 20, marginBottom: 30, fontFamily: 'DancingScript_700Bold' },
  textoAbajo: { color: '#7E22CE', fontSize: 14, marginTop: 30, fontFamily: 'Montserrat_600SemiBold', letterSpacing: 1 },
  
  heartWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    // Sombra morada (Brillo)
    textShadowColor: '#8B5CF6',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 25,
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: '30%', // Ajusta esto para que el texto quede bien centrado en el corazón
  },
  heartText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'DancingScript_700Bold',
    textAlign: 'center',
    marginBottom: -5,
  },
  heartName: {
    color: '#FFFFFF',
    fontSize: 34,
    fontFamily: 'DancingScript_700Bold',
    textAlign: 'center',
  },
});