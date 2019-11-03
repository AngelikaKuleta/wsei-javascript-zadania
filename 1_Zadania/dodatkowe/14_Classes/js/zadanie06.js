let foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
  print() {
    console.log(`${this.name} (p: ${this.protein}, c: ${this.carbs}, f: ${this.fat})`);
  }
}

class FastFood extends Food {
}

class FatFreeFood extends Food { 
}

const add = document.querySelector("input[type=submit]");
const products = document.getElementById("products");
const name = document.getElementById("name");
const protein = document.getElementById("proteins");
const carbs = document.getElementById("carbs");
const fat = document.getElementById("fat");

const addToList = (product) => {
  let li = document.createElement("li");
  li.textContent = `${product.name} (p: ${product.protein}, c: ${product.carbs}, f: ${product.fat})`;
  products.appendChild(li);
}

foods.push(new FastFood('Fries', 3.4, 41, 15));
foods.push(new FastFood('Donut', 4.9, 51, 25));
foods.push(new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4));
foods.forEach(el => { addToList(el) });

add.addEventListener("click", (e) => {
  e.preventDefault();
  if (name.value && parseFloat(protein.value) && parseFloat(carbs.value) && parseFloat(fat.value)) {
    let calories = protein.value * 4 + carbs.value * 4 + fat.value * 9;
    let product;
    if (calories > 250)
      product = new FastFood(name.value, protein.value, carbs.value, fat.value);
    else
      product = new FatFreeFood(name.value, protein.value, carbs.value, fat.value);
    
    foods.push(product)
    addToList(product);
    console.log(foods);
    name.value = "";
    protein.value = ""; 
    carbs.value = "";
    fat.value = "";
  }
});

