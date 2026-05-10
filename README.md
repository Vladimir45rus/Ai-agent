# 🤖 Царь ИИ-Агент & VoicePulse / Tsar AI-Agent

[RU] Экспериментальная экосистема для автоматизации задач, анализа кода и голосового управления.
[EN] Experimental ecosystem for task automation, code analysis, and voice control.

---

## 📂 Структура / Project Structure
* **mobile-app/** — [RU] Мобильное приложение (React Native/Expo). / [EN] Mobile application.
  * `src/App.js` — [RU] Интерфейс и связь с ИИ-центром. / [EN] UI & AI communication.
* **Tsar_Main_Brain.js** — [RU] Главный управляющий модуль (Оркестратор). / [EN] Main Orchestrator.
* **voice_commander.js** — [RU] Обработка и фильтрация команд. / [EN] Command filtering.

## 🚀 Текущие возможности / Current Features
- **Voice Control:** [RU] Прямое управление через VoicePulse. / [EN] Direct voice control.
- **AI Analytics:** [RU] Рефакторинг и анализ логов через DeepSeek API. / [EN] Refactoring via DeepSeek.
- **Hybrid Architecture:** [RU] Тяжелые вычисления на сервере, быстрый клиент на смартфоне. / [EN] Offloaded computations.

## 🛠 План развития (Roadmap) / Next Steps
1. **[RU]** Полная миграция всех модулей на двуязычную документацию (RU/EN).
   **[EN]** Full migration of all modules to dual-language documentation.
2. **[RU]** Внедрение системы "Царь ID" для безопасной авторизации.
   **[EN]** Integration with "Tsar ID" for secure authentication.
3. **[RU]** Автоматизация выплаты подписок через встроенный модуль.
   **[EN]** Automated subscription payments module integration.
4. **[RU]** Поддержка работы без интернета (Local LLM).
   **[EN]** Offline support via local LLMs.

## 📦 Запуск / Setup
Команды для терминала
cd mobile-app
npm install
npx expo start

## 📄 License:

MIT
