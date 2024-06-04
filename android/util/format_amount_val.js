
function formatAmountVal() {
        let amt = Number(AMOUNT)
        let formattedAmount = amt.toFixed(2)
        return formattedAmount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
output.formatAmountVal = formatAmountVal