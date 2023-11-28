export function getCart() {
  const existingItemsString = localStorage.getItem("cartItems");
  const existingItems = existingItemsString
    ? JSON.parse(existingItemsString)
    : [];
  return existingItems;
}
