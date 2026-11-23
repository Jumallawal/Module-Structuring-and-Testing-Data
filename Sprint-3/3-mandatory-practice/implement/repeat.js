function repeat(str, count) {
    if (count < 0) {
        throw new Error("Count must not be negative.");
    }

    let repeatedStr = "";

    for (let i = 0; i < count; i += 1) {
        repeatedStr += str;
    }

    return repeatedStr;
}

module.exports = repeat;