// Завдання 1. Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// Виконай рефакторинг коду функції checkPassword, використовуючи патерн «раннє повернення»:

// function checkPassword(password){
//     const ADMIN_PASSWORD = 'checkPASSword';
    
// }

// function checkPaccword(password){
//     const ADMIN_PASSWORD = 'checkPASSword';
//     if (password === ADMIN_PASSWORD){
//        return 'Congrats, your entered is sucsessful!';
//     }
//     return 'Worring, your data is not correct!';
// }

// console.log(checkPaccword());


// ЗАДАЧА 6
// Зібрати в allTopics масив усіх предметів всіх курсів використовуючи flatMap.
// Використовуючи Array.prototype.filter виконати фільтрацію, залишивши в uniqueTopics тільки унікальні елементи.
// const courses = [
//   {
//     name: "Basic HTML+CSS",
//     topics: ["VSCode", "HTML", "CSS", "GitHub Desktop", "GitHub"],
//   },
//   {
//     name: "Intermediate HTML+CSS",
//     topics: ["VSCode", "Terminal", "Git", "GitHub", "HTML", "CSS"],
//   },
//   {
//     name: "Basic JavaScript",
//     topics: [
//       "VSCode",
//       "Type system",
//       "Loops",
//       "Functions",
//       "Conditions",
//       "Classes",
//       "DOM",
//       "Git",
//       "GitHub",
//     ],
//   },
//   {
//     name: "Intermediate JavaScript",
//     topics: [
//       "VSCode",
//       "NPM",
//       "Bundlers",
//       "Transpiling",
//       "Promises",
//       "AJAX",
//       "Git",
//       "GitHub",
//     ],
//   },
// ];


// const allTopics = courses.flatMap(course => course.topics);
// const uniqueTopics = allTopics.filter((allTopics, index, arr) => arr.indexOf(allTopics) === index);

// console.log(uniqueTopics);



// ЗАДАЧА 1
// 1) Напишіть ф - ю конструктор яка створює обєкт person з такимим ключами:
// const Person = {
//   firstName,
//   lastName,
//   age,
//   gender,
//   interest,
//   bio() {
//     // виводить рядок Привіт {імя} мені {вік} років. Мені подобається {інтерес}
//   },
//   greeting() {
//     // Привіт, я {імя}
//   },
// };

// class Person {
//     constructor({firstName,
//         lastName,
//         age,
//         gender,
//         interest}) {
//         this.firstName = firstName,
//             this.lastName = lastName,
//             this.age = age;
//         this.gender = gender,
//             this.interest = interest,

//             this.bio = function () {
//                 console.log(` Привіт ${firstName} мені ${age} років.`);
//             };
//         this.greeting = function () {
//             console.log(`Привіт, я ${lastName}`);
//         };
//     }
// }
//    const data = new Person( "John", "Doe", 25, "чоловік", "подорожі");
// data.bio();
// data.greeting();


// ЗАДАЧА 2
// Напишіть клас User для створення користувача з наступними властивостями:
// username - імя, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// Клас очікує один параметр - об'єкт налаштувань з однойменними властивостями.
// Добавте метод getInfo(), який повертає рядок:
// User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// class User{
//     constructor({username,
//         age,
//         numberOfPosts}){
//             this.username = username;
//             this.age = age;
//             this.numberOfPosts = numberOfPosts;
//         }
//         getInfo(){
//             return `User ${ this.username } is ${  this.age } years old and has ${ this.numberOfPosts } posts.`;
//         }
// }
// const createdUser = new User({
//     username: 'Peter',
//     age: 45,
//     numberOfPosts: 150,
// });

// console.log(createdUser.getInfo());

// ЗАДАЧА 3
// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items.
// Добавте методи класу:
// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар та додає його до поточних.
// removeItem(item) - отримає товар і, якщо він є, видаляє його з поточних.
// const items = new Storage(["Виноград", "Банани", "Кокоси", "Ківі"]);
// items.addItem("Манго");
// items.removeItem("Ківі")

// class Storage{
//     constructor(initialItems){
//         this.items = initialItems;
//     }
//     getItems(){
//         return this.items;
//     }
//     addItem(item){
//         this.items.push(item);
//     }
//     removeItem(item){
//         const index = this.items.indexOf(item);
//         if (index !== -1){
//             this.items.splice(index, 1);
//         }
//     }
// }
// const items = new Storage (["Виноград", "Банани", "Кокоси", "Ківі"]);
// console.log(items.getItems());
// items.addItem("Манго");
// console.log(items.getItems());
// items.removeItem("Ківі");
// console.log(items.getItems());


// ЗАДАЧА 4
// Напиши клас Client який створює об'єкт із властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер та сеттер login і email.

// class Client {
//     #login;
//     #email;
//     constructor({login, email}){
//         this.#login = login;
//         this.#email = email;
//     }
//     get login(){
//         return this.#login;
//     } 
//     set login(newLogin){
//         return this.#login = newLogin;
//     }
//     get email(){
//         return this.#email;
//     }
//     set email(newEmail){
//         return this.#email = newEmail;
//     }
// }
// const client = new Client ({
//     login: 'Nike',
//     email: 'nike@exampl.com',
// });
// console.log(client.login);
// console.log(client.email);

// client.login = 'Nike1';
// client.email = 'nike1@exampl.com';

// console.log(client.login);
// console.log(client.email);


// ЗАДАЧА НА ЗАМИКАННЯ 5
// У вас є функція counter(), яка повинна повернути нове значення лічильника кожного разу, коли вона викликається. Проте, коли ви викликаєте counter() два рази, вона повертає одне і те ж значення. Ви хочете, щоб кожен виклик counter() повертав нове значення лічильника. Використовуючи замикання, напишіть функцію, яка розв'язує цю проблему.

// function counter(){
//     let count = 0;

//     return function(){
//         count +=1;
//         return count;
//     };
// }
// const increment = counter();

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());