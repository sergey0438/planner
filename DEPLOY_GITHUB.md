# Обновление с v5 до v6

1. Firebase → Authentication → Sign-in method.
2. Включи `Anonymous`.
3. Realtime Database → Rules.
4. Вставь содержимое `database.rules.json` из v6 → Publish.
5. В `firebase-config.js` вставь свою текущую Firebase-конфигурацию.
6. Замени файлы репозитория GitHub файлами из v6.
7. Commit changes.
8. Подожди GitHub Pages.
9. На Mac сделай Command + Shift + R.
10. Настройки → Диагностика синхронизации → Проверить облако.

Если тест пишет «Firebase: запись и чтение работают», подключай второе устройство тем же кодом синхронизации.

Примечание: данные v5 лежали в другой структуре Firebase. Если там уже есть важные задачи, сначала экспортируй JSON из v5, затем импортируй его в v6.
