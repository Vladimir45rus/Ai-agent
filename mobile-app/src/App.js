import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Главный интерфейс Царь-Голос
export default function App() {
  const handleVoicePress = () => {
    console.log("Голосовая команда: Слушаю Батюшку...");
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#1a1a1a', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#FFD700', fontSize: 24, marginBottom: 20 }}>Царь-Голос v2.5</Text>
      <TouchableOpacity 
        onPress={handleVoicePress}
        style={{ backgroundColor: '#FFD700', padding: 20, borderRadius: 50 }}
      >
        <Text style={{ color: '#000', fontWeight: 'bold' }}>ГОВОРИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
}
