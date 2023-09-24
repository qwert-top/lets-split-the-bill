$("#split").click(function () {  //クリックされたときに実行することを定義
    const bill = $("#inputBill").val(); // テキストボックスのvalue値を取得
    const people = $("#inputPeople").val();
    const splitedBill = bill / people;
    $("#splitedBill").text(splitedBill); // spanタグに値を設定

});