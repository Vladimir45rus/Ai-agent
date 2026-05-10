/**
 * Царь-Голос: Модуль распознавания команд для MiMo v2.5 Pro
 */

export const startVoiceListening = () => {
    console.log("Царь, слушаю ваше приказание...");

    // Используем Web Speech API (или MiMo SDK в будущем)
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript;
        console.log("Вы сказали:", command);
        
        // Отправляем распознанный текст в наш Главный Мозг
        // (Этот метод мы импортируем из Tsar_Main_Brain.js)
        processTsarCommand(command);
    };

    recognition.onerror = (err) => {
        console.error("Ошибка распознавания, Батюшка:", err.error);
    };

    recognition.start();
};

function processTsarCommand(text) {
    // Здесь логика связки: текст уходит в диспетчер
    alert("Команда принята: " + text);
}
