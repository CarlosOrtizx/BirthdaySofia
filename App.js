import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Importamos las fuentes
import { useFonts } from 'expo-font';
import { DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
import { Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import IntroScreen from './src/screens/IntroScreen';
import MessageScreen from './src/screens/MessageScreen';

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  // Cargamos las fuentes
  const [fontsLoaded] = useFonts({
    DancingScript_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  // Mientras cargan las fuentes, mostramos un indicador
  if (!fontsLoaded) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#DC2626" />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        {showMessage ? (
          <MessageScreen onBack={() => setShowMessage(false)} />
        ) : (
          <IntroScreen onEnter={() => setShowMessage(true)} />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  loading: { flex: 1, backgroundColor: '#000000', justifyContent: 'center', alignItems: 'center' },
});