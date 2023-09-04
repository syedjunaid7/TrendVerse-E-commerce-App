import React from "react";
import ShoppingList from "./ShoppingList";
import MainCarousel from "./MainCarousel";
export default function Home() {
  return (
    <div>
      <MainCarousel />
      <ShoppingList />
    </div>
  );
}
