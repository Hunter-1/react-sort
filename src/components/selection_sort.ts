export default function selection_sort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[min]) {
                min=j;
            }
        }
        if (min !== array.length) {
            let x = array[i];
            array[i] = array[min];
            array[min] = x;
        }
    }
    return array;
}


