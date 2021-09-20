export default function quick_sort(array: number[]): number[] {
    var randomPlace = Math.floor(Math.random() * array.length),
        pivot = array[randomPlace],
        left: number[] = [],
        right: number[] = [],
        i;

    for (i = 0; i < array.length; i++) {
        (array[i] < pivot ? left : right).push(array[i]);
    }
    //console.log(pivot, JSON.stringify(array), JSON.stringify(left), JSON.stringify(right));

    // prevent looping forever
    if (!left.length && right.every(function (v) { return v === pivot; })) {
        return right;
    }

    if (left.length <= 1 && right.length <= 1) {
        return left.concat(right);
    }
    if (left.length <= 1) {
        return left.concat(quick_sort(right));
    }
    if (right.length <= 1) {
        return quick_sort(left).concat(right);
    }
    return quick_sort(left).concat(quick_sort(right));
}
