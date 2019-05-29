function vowel_count(str1) {
    let vowels = 'aeiouAEIOU';
    var vcount = 0;

    for (var i = 0; i < str1.length; i++) {
        if (vowels.indexOf(str1[i]) !== -1) {
            vcount += 1;
        }
    }
    return vcount;
}
console.log(vowel_count("cliff Jorgensen"));