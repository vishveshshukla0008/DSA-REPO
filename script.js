function capitalizeEnds(str) {
    let arr = str.split(" ");
   return str
        .split(" ")
        .map(word => {
            if (word.length === 1) return word.toUpperCase();
            return (
                word[0].toUpperCase() +
                word.slice(1, -1) +
                word[word.length - 1].toUpperCase()
            );
        })
        .join(" ");

}

console.log(capitalizeEnds("Mera desh mahan hai aur rahega"));