export const currencyFormat = (num, symbol = '$', decimals = 0) => symbol + '' + num.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
