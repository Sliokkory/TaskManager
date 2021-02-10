# TaskManager

Простое мобильное приложение для работы с заявками, отслеживания их по карте, а также онлайн чат.
Реализовано при помощи React-native + expo

Авторизация пользователя реализована при помощи интеграции с firebase. Регистрация самими пользователями не предусмотрена из соображений безопасности.
![Иллюстрация к проекту](https://github.com/Sliokkory/TaskManager/tree/main/assets/auth.png)
Главный экран предоставляяет доступ к двум основным функциям приложения: онлайн чат и заявки.
![Иллюстрация к проекту](https://github.com/Sliokkory/TaskManager/tree/main/assets/main.png)
Навигация между экранами реализована при помощи @react-navigation/native и @react-navigation/stack

Онлайн чат релизован при помощи react-native-gifted-chat и интегрирован с firebase - любое сообщение будет сохранено в базе.
![Иллюстрация к проекту](https://github.com/Sliokkory/TaskManager/tree/main/assets/chat.png)
Заявки следующую информацию:
1. Номер заявки
2. Заголовок
3. Заказчик
4. Описание
5. Активная кнопка для перехода в яндекс карты, а из них уже в навигатор для быстрого реагирования на заявки
![Иллюстрация к проекту](https://github.com/Sliokkory/TaskManager/tree/main/assets/task.png)
