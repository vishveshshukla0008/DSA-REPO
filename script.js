function bubbleSort(arr) {
    let it = 0;

    while (it < arr.length - 1) {
        let swapped = false;

        for (let i = 0; i < arr.length - 1 - it; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) break;
        it++;
    }

    console.log(arr);
}

bubbleSort([3, 8, 4, 1, 7]);
