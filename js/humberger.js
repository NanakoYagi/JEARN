// イベントターゲット要素
const checkbox = document.getElementById("hb-menu_check");

// イベントハンドラー

/*
    ハンバーガーメニューが表示されているときは、後ろのコンテンツ部分をスクロールできないようにする
*/

function scrollNonContent(e) {
    if (e.target.checked) {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "auto";
    }
}

checkbox.addEventListener("change", scrollNonContent)