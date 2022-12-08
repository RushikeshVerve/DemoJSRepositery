function getDateInSpecifiedFormat(date){
    var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

if (month.length < 2) 
    month = '0' + month;
if (day.length < 2) 
    day = '0' + day;

return [year, month, day].join('-');
}
console.log(getDateInSpecifiedFormat("DD-MM-yyyy"))

//console.log(date)


function formatDate(DateFormat) {
    var date=new Date()
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
    }
    return DateFormat.replace(/mm|dd|yy|yyy/gi, matched => map[matched])
}
const strDate=formatDate("dd-mm-yyyy")
console.log(strDate)