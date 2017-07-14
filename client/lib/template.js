Template.registerHelper('math', function () {
    return {
        mul ( a, b ) { return a * b; },
        div ( a, b ) { return b ? a / b : 0; },
        sum ( a, b ) { return a + b; },
        sub ( a, b ) { return a - b; },
    }
});