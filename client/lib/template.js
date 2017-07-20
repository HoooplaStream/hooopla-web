Template.registerHelper('math', function () {
    return {
        mul (a, b) {
            return a * b;
        },
        div (a, b) {
            return b ? a / b : 0;
        },
        sum (a, b) {
            return a + b;
        },
        sub (a, b) {
            return a - b;
        },
    }
});

Template.registerHelper('starNote', function (note) {
    var noteFive = note / 2;
    var out = '';
    for (var i = 1; i < noteFive; i++)
        out += '<i class="material-icons white-text" style="font-size: 18px">star</i>';
    for (var i2 = noteFive; i2 < 5; i2++)
        out += '<i class="material-icons grey-text" style="font-size: 18px">star</i>';
    return Spacebars.SafeString(out);
});

Template.registerHelper('formatId', function(data) {
    return (data && data._str) || data;
});

Template.registerHelper('isEmpty', function(array) {
    return array.count() !== 0;
});