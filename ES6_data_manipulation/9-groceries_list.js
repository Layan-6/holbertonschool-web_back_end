export default function groceriesList() {
  // Create a new Map
  const groceries = new Map();
  
  // Add items to the map
  groceries.set('Apples', 10);
  groceries.set('Tomatoes', 10);
  groceries.set('Pasta', 1);
  groceries.set('Rice', 1);
  groceries.set('Banana', 5);
  
  return groceries;
}
