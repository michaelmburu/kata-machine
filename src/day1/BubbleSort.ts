export default function bubble_sort(arr: number[]): void {
    //Iterate the outer loop
    for (let i = 0; i < arr.length; i++) {
        // Iterate the inner loop but minus 1 and i
        for (let j = 0; j < arr.length - 1 - i; j++) {
            //Swap
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}
