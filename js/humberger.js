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

/*
    details要素を使用したアコーディオンに対してアニメーションを付加するハンドラ
 */

function addTransitionAccordion() {
    const accordions = document.querySelectorAll(".js-details");

    if (accordions.length <= 0) return 

    accordions.forEach(function (el) {
		const summary = el.querySelector(".js-summary");
		const answer = el.querySelector(".js-answer");
		summary.addEventListener("click", (event) => {
			// デフォルトの挙動を無効化
			event.preventDefault();
			// detailsのopen属性を判定
			if (el.getAttribute("open") !== null) {
				// アコーディオンを閉じるときの処理
				const closingAnim = answer.animate(closingAnimation(answer), animTiming);

				closingAnim.onfinish = () => {
					// アニメーションの完了後にopen属性を取り除く
					el.removeAttribute("open");
				};
			} else {
				// open属性を付与
				el.setAttribute("open", "true");
				// アコーディオンを開くときの処理
				answer.animate(openingAnimation(answer), animTiming);
			}
		});
	});
}

/*
    アニメーション関係の定義や関数
*/

// アニメーションの時間とイージング
const animTiming = {
    duration: 300,
    easing: "ease-in-out",
  };
  
function closingAnimation(answer) {
    return [
        {
            height: answer.offsetHeight + "px",
            opacity: 1,
        },
        {
            height: 0,
            opacity: 0,
        },
    ]
}

function openingAnimation(answer) {
    return [
        {
            height: 0,
            opacity: 0,
        },
        {
            height: answer.offsetHeight + "px",
            opacity: 1,
        },
    ]
}

document.addEventListener('DOMContentLoaded', addTransitionAccordion)
checkbox.addEventListener("change", scrollNonContent)