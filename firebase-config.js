// Firebase Console → Project settings → Your apps → Web app.
// Вставьте сюда firebaseConfig вашего проекта.
//
// Для Local Planner v6 включите:
// Firebase Console → Authentication → Sign-in method → Anonymous → Enable.
//
// Email/Password больше НЕ нужен.
// Каждое устройство авторизуется в Firebase анонимно,
// а общий приватный код синхронизации выбирает одно облачное пространство.

export const firebaseConfig = {
  apiKey: "AIzaSyBR8OYBxrizm1WuQcXNiFpfu6VGEnH6C3I",
    authDomain: "local-planner-bd950.firebaseapp.com",
    databaseURL: "https://local-planner-bd950-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "local-planner-bd950",
    storageBucket: "local-planner-bd950.firebasestorage.app",
    messagingSenderId: "621048200693",
    appId: "1:621048200693:web:bd01c765a26be2708074bc"
};

export const firebaseConfigured =
  Boolean(
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.databaseURL &&
    firebaseConfig.projectId &&
    firebaseConfig.appId
  ) &&
  !firebaseConfig.apiKey.includes("REPLACE_ME") &&
  !firebaseConfig.projectId.includes("REPLACE_ME") &&
  !firebaseConfig.databaseURL.includes("REPLACE_ME");
