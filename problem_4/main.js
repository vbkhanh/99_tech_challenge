function sum_to_n_a(n) {
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
function sum_to_n_b(n) {
    var sum = 0;
    sum = (n + 1) * (n / 2);
    return sum;
}
function sum_to_n_c(n) {
    var sum = 0;
    sum = n * Math.floor(n / 2) + n;
    if (n % 2 == 0) {
        sum = n * Math.floor(n / 2) + Math.floor(n / 2);
    }
    else {
        sum = n * Math.floor(n / 2) + n;
    }
    return sum;
}
console.log(sum_to_n_c(8));
var n = 6;
console.log(Math.floor(n / 2));
