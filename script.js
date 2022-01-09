"use strict"
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`,
  },
  {
    id: 12,
    title: "Wagyu Steak",
    category: "Dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nobis tempora eos expedita a nihil ut nisi explicabo hic iure, consequatur voluptatem modi. Minus quidem natus voluptatem expedita quam iusto!`
  },
];

const sectionCenter = document.querySelector(".section-center")
const container = document.querySelector(".btn-container")

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  displayMenuBtns()
});


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `                <article class="menu-item">
                  <img src=${item.img} class="photo" alt="menu-item" />
                  <div class="item-info">
                    <header>
                      <h4>${item.title}</h4>
                      <h4 class="price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                  </div>
                </article>`;
  })
  displayMenu = displayMenu.join("")
  sectionCenter.innerHTML = displayMenu
}


function displayMenuBtns() {
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const filterBtns = container.querySelectorAll(".filter-btn");
  // filter items
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}