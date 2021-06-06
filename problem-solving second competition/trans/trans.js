const first = "code",
    second = "code";


let key = true;
for (let i = 0, j = second.length - 1; i < first.length; i++, j--) {
    if (first[i] !== second[j]) {
        key = false;
        break;
    }

}

console.log(key?"YES":"NO")

