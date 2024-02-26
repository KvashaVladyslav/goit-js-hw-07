const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll("h2");
titles.forEach(function (title) {
  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);
  const categoriesNames = document.querySelectorAll("#categories ul li");
  console.log(`Elements: ${categoriesNames.length}`);
});

list.forEach((el) => {
  el.style = `background-color: #F6F6FE; max-width: 360px; padding: 16px`;
});
const mainList = document.querySelector("#categories");
mainList.style = `list-style: none; display: flex; flex-direction: column; gap: 20px;`;
const listInsideMainList = document.querySelectorAll(".item ul");
listInsideMainList.forEach((el) => {
  el.style = `padding: 0px;`;
});
const listItems = document.querySelectorAll(".item ul li");
listItems.forEach((el) => {
  el.style = `display: flex; padding: 8px 16px; border: 1px solid #808080; margin-bottom: 8px; border-radius: 4px; color: #2E2F42; max-width: 360px; `;
});
