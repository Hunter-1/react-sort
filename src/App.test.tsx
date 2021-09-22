import bubble_sort from "./components/bubble_sort";
import selection_sort from "./components/selection_sort";
import quick_sort from "./components/quick_sort";

const expectedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const array = [12, 3, 5, 2, 17, 11, 14, 19, 18, 16, 9, 8, 15, 13, 6, 0, 4, 7, 1, 10];
test('Bubblesort sorted', () => {
  const sortedArray = bubble_sort(array);
  expect(sortedArray).toEqual(expectedArray)
});

test('Selectionsort sorted', () => {
  const sortedArray = selection_sort(array);
  expect(sortedArray).toEqual(expectedArray)
});

test('quicksort sorted', () => {
  const sortedArray = quick_sort(array);
  expect(sortedArray).toEqual(expectedArray)
});
