function fetchNumericVal() {
        return COPIED_VALUE.replace(/[^0-9\.]+/g, "")
}
output.fetchNumericVal = fetchNumericVal