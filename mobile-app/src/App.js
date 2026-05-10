import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
// ВОТ ОНА, 4-Я СТРОКА: Связываем приложение с Главным Мозгом
import { Agent } from '../../Tsar_Main_Brain.js';

export default function App() {
  const handleVoiceCommand = (command) => {
    // Отправляем твою команду в диспетчер
    const result = Agent.processCommand(command);
    
    // Выводим ответ на экран телефона
    Alert.alert("Царь-Система", `Цель: ${result.target}\nДействие: ${result.action}`);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#FFD700', fontSize: 28, fontWeight: 'bold', marginBottom: 30 }}>ЦАРЬ-ГОЛОС</Text>
      
      {/* Кнопка 1 */}
      <TouchableOpacity 
        onPress={() => handleVoiceCommand("Проверь мои подписки")}
        style={{ backgroundColor: '#FFD700', padding: 25, borderRadius: 10, width: '80%', marginBottom: 15 }}
      >
        <Text style={{ color: '#000', textAlign: 'center', fontWeight: 'bold' }}>ПРОВЕРИТЬ ПОДПИСКИ</Text>
      </TouchableOpacity>

      {/* Кнопка 2 */}
      <TouchableOpacity 
        onPress={() => handleVoiceCommand("Заблокируй доступ")}
        style={{ backgroundColor: '#FF0000', padding: 25, borderRadius: 10, width: '80%' }}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold' }}>АКТИВИРОВАТЬ ЩИТ</Text>
      </TouchableOpacity>
    </View>
  );
}
