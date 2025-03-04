

// Time complexity: O(n)
function sum_to_n_a(n: number): number {
    
    var sum = 0;

    for (var i = 1; i <= n; i++) {
        sum += i
    }

    return sum;
}

// Time complexity: O(1)
function sum_to_n_b(n: number): number {
    
    var sum = (n + 1) * (n / 2) ;
    
    return sum;
}

// Time complexity: O(1)
function sum_to_n_c(n: number): number {

    var sum = 0;
    
    if(n % 2 == 0) {
        sum = n * Math.floor(n / 2) + Math.floor(n / 2);
    }
    else {
        sum = n * Math.floor(n / 2) + n
    }
    
    return sum;
}


