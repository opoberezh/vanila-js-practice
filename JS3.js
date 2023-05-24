//  1. Напиши скрипт, який для об'єкта user послідовно:
  
//   - Додає поле mood зі значенням 'happy'
//   - Замінює значення hobby на 'skydiving'
//   - Замінює значення premium на false
//   - Виводить вміст об'єкта user у форматі ключ: значення,
//     для цього скористайся Object.keys()
// */

// const user = {
//   hobby: 'guitar',
//   premium: true,
//   occupation: 'software engineer',
// };


// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const keys = Object.keys(user);
// for (const key of keys ){
//     console.log(`${key}: ${user[key]}`);
// };
     
// 2. Метод Object.values()
// Є об'єкт, де зберігаються зарплати нашої команди. Напиши
// функцію getResult для підсумовування усіх зарплат.
// Функція повинна отримувати об'єкт з інформацію про зарплати та
// повертати загальну їх суму.
// Якщо об'єкт salaries порожній, результат має бути 0 
// */

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// const values = Object.values(salaries);
// let getResult = 0;
// for(const value of values){
//     getResult +=value;
// }
// console.log(getResult);


// 3. Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі, а в масив values всі значення його властивостей.


// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };
//  const keys = [];
//  const values = [];
//   for (const key in apartment){
//     keys.push(key);
//     values.push(apartment[key]);
//   };
//   console.log(keys);
//   console.log(values);


//   4. Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.
// const advert = { service: "apt",};

// const apartment = Object.create(advert); 
//     apartment.descr = "Spacious apartment in the city center";
//     apartment.rating = 4;
//     apartment.price = 2153;
  
//   const keys = [];
//   const values = [];
//   for (const key in apartment){
//     if (apartment.hasOwnProperty(key)){
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//   };
// console.log(keys);
// console.log(values);

//  5. Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object. Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// function countProps(object){
//    let propCount = 0;
//     for(prop in object){
//         if(object.hasOwnProperty(prop)){
//             propCount += 1;
//         }
//     } 
//     return propCount;
// }
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
// console.log(countProps({}));

// 6. Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of. Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і додай в масив values всі значення його властивостей.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//   };

//   const values = [];
//   const keys = Object.keys(apartment);
//   for(let key of keys){
//     values.push(apartment[key]);
//   }
//   console.log(values);

// 7. Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості - це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати загальну суму зарплат співробітників і повернути її. Використовуй змінну totalSalary для зберігання загальної суми зарплати.
 
// function countTotalSalary(salaries){
//    let totalSalary = 0;
//     const salaryValue = Object.values(salaries);
//     for (const value of salaryValue){
//         totalSalary += value;
//     }
//     return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));


// 8. Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
//   const hexColors = [];
//   const rgbColors = [];
  
//   for (const color of colors){
// hexColors.push(color.hex);
// rgbColors.push(color.rgb);
//   }
//   console.log(hexColors);
//   console.log(rgbColors);


//  9. Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   function getProductPrice(productName){
//         for (const product of products){
// if (product.name === productName){
//     return product.price
// }
//     }
//     return null
//   } 
//   console.log(getProductPrice("Radar"));
//   console.log(getProductPrice("Grip"));
//   console.log(getProductPrice("Scanner"));
//   console.log(getProductPrice("Droid"));
//   console.log(getProductPrice("Engine"));


// 10. Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості. Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products. Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

// function getAllPropValues(propName){
//     const propValue = [];
//     for (const key of products){
//         if (key[propName]){
//             propValue.push(key[propName]);  
//         }
        
//     }
//     return propValue;
// }
 
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));


// 11. Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару. Функція повинна повернути загальну вартість (ціна * кількість) товару з таким ім'ям з масиву products.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
// function calculateTotalPrice(productName){
//   let totalPrice = 0;
//     for(const product of products){
// if (product.name === productName){
//     totalPrice = product.price * product.quantity;
// }

//     }
//     return totalPrice;
//    }
// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));
// console.log(calculateTotalPrice("Grip"));
// console.log(calculateTotalPrice("Scanner"));


// 12. Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні (meanTemperature). Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації властивостей об'єкта highTemperatures.

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };


//   const { yesterday, today, tomorrow } = highTemperatures;

//   const meanTemperature = (yesterday + today + tomorrow) / 3;
  
//   console.log(meanTemperature);


// 13. У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди. Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//   };

//   const { 
//     yesterday, 
//     today, 
//     tomorrow, 
//     icon =  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", 
// } = highTemperatures; 

//   const meanTemperature = (yesterday + today + tomorrow) / 3;

//   console.log(meanTemperature);


// 13. Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
//     icon:  "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", 
//   };

//   const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon:  highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   } = highTemperatures;

//   const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//   console.log(highTemperatures);


// 14. Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];

//   const hexColors = [];
//   const rgbColors = [];
//   for (const {hex, rgb} of colors){
// hexColors.push(hex);
// rgbColors.push(rgb);
//   }

//   console.log(hexColors);
//   console.log(rgbColors);


// 15. Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей об'єкта forecast. Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// const forecast = {
//     today: {
//       low: 28,
//       high: 32,
//       icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//       low: 27,
//       high: 31,
//     },
//   };

//   const {
//     today:  {
//         low: lowToday,
//         high: highToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: lowTomorrow,
//         high: highTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//   } = forecast;



// 16.Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два дні наступного формату.
// function calculateMeanTemperature(forecast) {
//     const {
//       today:{low: todayLow, high: todayHigh},
//       tomorrow: {low: tomorrowLow, high: tomorrowHigh},
//     } = forecast;
    
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;;
// } 
     

//      console.log(calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }));
//      console.log(calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }));