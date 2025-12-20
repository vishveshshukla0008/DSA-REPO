function characterFrequency(str) {
    if (str.length == 0) {
        return;
    }
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            continue;
        }
        if (obj[str[i]] > 0) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }


    let result = Object.entries(obj).sort().forEach(([key, val]) => {
        console.log(`${key}:${val}`)
    })
}

characterFrequency("hello");