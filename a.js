let result = [];
function isExit(char) {
    for (const iterator of result) {
        if (iterator.key === char) {
            return true;
        }
    }
    return false;
}

function checkOne(str, char) {
    let sameCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char && !isExit(char)) {
            sameCount++;
        }
    }
    if (sameCount > 1) {
        result.push({ key: char, count: sameCount });
    }
}


var findFirstRepeated = function (str) {
    for (let i = 0; i < str.length; i++) {
        checkOne(str, str[i]);
    }

    var reg = /(?=((.+)(?:.*?\2)+))/g;
    var sub = "";
    var maxstr = "";
    reg.lastIndex = 0;
    sub = reg.exec(str);
    let count = 1;
    while (!(sub == null)) {
        if (maxstr === sub[2]) {
            count++;
        }
        if ((!(sub == null)) && (sub[2].length > maxstr.length)) {
            maxstr = sub[2];
        }
        sub = reg.exec(str);
        reg.lastIndex++; // start searching from the next position
    }

    if (!isExit(maxstr)) {
        result.push({ key: maxstr, count });
    }

    let index = 0;
    let max = result[0].count;
    for (let i = 0; i < result.length; i++) {
        if (max < result[i].count) {
            max = result[i].count;
            index = i;
        }
        if (max == result[i].count && result[i].key.length > result[index].key.length) {
            max = result[i].count;
            index = i;
        }

    }
    console.log(result);
    return result[index].key;
};

console.time('haha');
console.log(findFirstRepeated('abcdefab'));
console.timeEnd('haha');

