
const buttons = document.querySelectorAll("button[data-year]");

// Register Event

buttons.forEach(button => {
    button.addEventListener('click', eventCallback)
})

// callback function

function eventCallback(event) {

    // クリックされた年度を取得
    if (!(event.currentTarget instanceof HTMLButtonElement)) return 
    const publishedYear = event.currentTarget.dataset.year
    if (!publishedYear) return 

    // 年度を変更する
    const displayYearElement = document.querySelector('h2.published-year')
    if (!displayYearElement) return 
    displayYearElement.textContent = publishedYear

    // 現在表示されているセクションを非表示にし、クリックされた年度の情報を表示

    const hiddenElement = document.querySelector('div.yearly-paper.js-active')
    if (hiddenElement) {
        hiddenElement.classList.remove('js-active')
    } 

    const displayElement = document.querySelector(`div.yearly-paper[data-year="${publishedYear}"]`)
    if (!displayElement) return 
    if (!displayElement.classList.contains('js-active')) {
        displayElement.classList.add('js-active')
    }
    
}