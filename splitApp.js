let ceiling = "one-yen";
let senior;
let junior;
let ceilNum;

$("#clearAll").click(function () {
    $("#inputBill").val("");
    $("#inputSenior").val("");
    $("#inputJunior").val("");
    $("#payMore").val("");
})

$("#ceiling").change(function () {
    ceiling = $("#ceiling").val();
})

function setCeiling(input) {
    switch (input) {
        case "one-yen":
            ceilNum = 1;
            break;
        case "ten-yen":
            ceilNum = 10;
            break;
        case "hundred-yen":
            ceilNum = 100;
            break;
        case "fivehundred-yen":
            ceilNum = 500;
            break;
        case "thousand-yen":
            ceilNum = 1000;
            break;
        case "tenthousand-yen":
            ceilNum = 10000;
            break;
    }
}

$("#split").click(function () {
    const bill = $("#inputBill").val();
    senior = $("#inputSenior").val();
    junior = $("#inputJunior").val();
    let payMore = Number($("#payMore").val());
    const people = +senior + +junior;
    const splitedBill = (bill - (senior * payMore)) / people;
    setCeiling(ceiling);
    const paySenior = Math.ceil((splitedBill + payMore) / ceilNum) * ceilNum;
    $("#paySenior").text(paySenior);
    const payJunior = Math.ceil(splitedBill / ceilNum) * ceilNum;
    $("#payJunior").text(payJunior);
    const remainder = ((paySenior * senior) + (payJunior * junior)) - bill;
    $("#remainder").text(remainder);
    $("#reduceError").text("");
});

$("#reduceSenior").click(function () {
    const paySenior = Number($("#paySenior").text());
    let remainder = Number($("#remainder").text());
    const reduceSenior = remainder / senior;
    paySeniorNew = Math.ceil((paySenior - reduceSenior) / ceilNum) * ceilNum;
    $("#paySenior").text(paySeniorNew);
    remainder = remainder - ((paySenior - paySeniorNew) * senior);
    $("#remainder").text(remainder);
    if (paySenior == paySeniorNew) {
        $("#reduceError").text("これ以上減らせません");
    }
})

$("#seniorPlus").click(function () {
    let paySenior = Number($("#paySenior").text());
    let payJunior = Number($("#payJunior").text());
    paySenior += 100;
    $("#paySenior").text(paySenior);
    payJunior = Math.ceil(payJunior - ((100 * senior) / junior));
    $("#payJunior").text(payJunior);
    const remainder = ((paySenior * senior) + (payJunior * junior)) - bill;
    $("#remainder").text(remainder);
})