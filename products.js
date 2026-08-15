let selectedGame = null;
let selectedCategory = null;
let selectedPackage = null;

async function loadProducts(){

const { data, error } =
await supabase
.from("products")
.select("*");

if(error){
console.log(error);
return;
}

console.log("Products Loaded");
console.log(data);

}

loadProducts();
