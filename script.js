let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  { quote: "Сука нахуй блядь", person: "Козлов И." },
  { quote: "Ну неприятно вот, знаешь, ну неприятно...", person: "Кузянин С." },
  { quote: "Не имей сто рублей, а имей сто друзей", person: "Нищий" },
  {
    quote: "Вы что — мужики или пидорасы проклятые, как вы можете так писать?",
    person: "Никита Хрущев",
  },
  {
    quote: "На деле это не мозг нации, а её говно",
    person: "Ленин В.И. об интеллигенции",
  },
  {
    quote:
      "Всё, что есть прекрасного в этой жизни, либо аморально, либо незаконно, либо приводит к ожирению.",
    person: "Оскар Уайльд",
  },
  {
    quote:
      "Эксперт — это человек, который совершил все возможные ошибки в очень узкой специальности.",
    person: "Нильс Бор",
  },
  {
    quote:
      "Каждый человек имеет право на собственное мнение — при условии, что оно совпадает с нашим.",
    person: "Бернард Шоу",
  },
  { quote: "Я не вижу запаха", person: "Виталий Кличко" },
  {
    quote: "Наше выступление похоже на теорему пифагора - на него нет ответа",
    person: "Шакил О'нил",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
