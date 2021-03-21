export default function formoatCurrency(num) {
    return "$"+ Number(num.toFixed(1)).toLocaleString()+" ";
}