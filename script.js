/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */


const forecastBtn = document.querySelector('.forecast-btn');

forecastBtn.addEventListener('click',()=>{
const predictionNumber = Math.floor(Math.random() * 5) + 1;
let predictionText = "";
const probability = Math.floor(Math.random() * 101);

if (predictionNumber === 1) {
  predictionText = "Сегодня будет отличный день!";
} else if (predictionNumber === 2) {
  predictionText = "Вас ждет приятный сюрприз!";
} else if (predictionNumber === 3) {
  predictionText = "Будьте осторожны, возможны неприятности.";
} else if (predictionNumber === 4) {
  predictionText = "Сегодня удачный день для новых начинаний.";
} else {
  predictionText = "Не стоит принимать важные решения сегодня.";
}

document.querySelector('.current-forecast h1').innerText = predictionText;
document.querySelector('.current-forecast p').innerText = `Вероятность события: ${probability}%`;

const forecastItemTemplate = document.getElementById('forecast-item');
const newForecastItem = document.importNode(forecastItemTemplate.content, true);
newForecastItem.querySelector('h3').innerText = predictionText;
newForecastItem.querySelector('p').innerText = `Вероятность события: ${probability}%`;

const forecastsContainer = document.querySelector('.forecasts');
forecastsContainer.prepend(newForecastItem);
});