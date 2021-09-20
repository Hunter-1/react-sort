export default function bubble_sort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
        let change = false;
        for(let j = i+1; j < array.length; j++){
            if(array[j] < array[i]) {
                let x = array[j];
                array[j] = array[i];
                array[i] = x;
                change = true;
            }
        }
        if (!change) {
            return array;
        }
    }
    return array;
}