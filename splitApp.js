$("#split").click(function () {  //クリックされたときに実行することを定義
    const bill = parseInt($("inputBill").val());  //テキストボックスからテキストを取得し変数に格納
    const people = parseInt($("inputPeople").val());
    if (!isNaN(bill) && !isNaN(people)) {
        const splitedBill = bill / people; // 請求額を人数で均等に割る
        $("#splitedBill").text(splitedBill); // 結果を表示（小数点以下2桁まで表示）
    } else {
        $("#splitedBill").text("入力が無効です"); // 数値に変換できなかった場合のエラーメッセージ
    }
});