# Local Planner v6 — надёжная синхронизация без входа

## Почему v6
В v5 общий код превращался в скрытый Email/Password аккаунт Firebase. Это работоспособная идея, но для личного планировщика она слишком сложная.

В v6:
- каждое устройство использует Firebase Anonymous Authentication;
- email и пароль не используются вообще;
- приватный 128-битный код синхронизации хэшируется SHA-256;
- хэш становится ID общего workspace;
- iPhone, iPad и Mac могут иметь разные anonymous UID;
- при одинаковом коде они читают и пишут один `/workspaces/<hash>/`.

## Что включить в Firebase
Firebase Console → Authentication → Sign-in method:
- Anonymous → Enable.

Email/Password для v6 не требуется.

## Realtime Database Rules
Открой:
Realtime Database → Rules

Полностью замени правила содержимым `database.rules.json` и нажми Publish.

## firebase-config.js
Скопируй Firebase Web config и обязательно добавь `databaseURL`.

## Проверка
В приложении:
Настройки → Диагностика синхронизации → Проверить облако.

Если всё правильно, появится:
`Firebase: запись и чтение работают.`

Диагностика также показывает:
- Firebase Project
- Database host
- anonymous auth UID
- Workspace fingerprint
- online/offline
- время последней синхронизации

## Второе устройство
На первом:
Настройки → Код синхронизации → Копировать.

На втором:
Настройки → Подключить это устройство → вставить код → Подключить по коду.

Workspace fingerprint на обоих устройствах должен быть одинаковым.

## Важно
Код синхронизации является приватным ключом к workspace. Не публикуй его в GitHub.
