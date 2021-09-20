import React from 'react';
import './App.css';
import createArray from "./components/shuffle";
import quick_sort from "./components/quick_sort";
import selection_sort from "./components/selection_sort";
import bubble_sort from "./components/bubble_sort";

const length = 20;
let array = createArray(length)

console.log(array)
console.log(quick_sort(array))
console.log(selection_sort(array))
console.log(bubble_sort(array))

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;
