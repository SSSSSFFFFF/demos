
var emojis = {
    "🐴":"马，妈",
    "🐛":"冲，虫",
    "👶":"弟，张笑彬",
    "☕":"杯子，辈子"
}
function toEmoji(str) {
    str = str.split("")
    var result = []
    for (let i = 0; i < str.length; i++) {
        for (j in emojis) {
            if (emojis[j].indexOf(str[i]) >= 0) {
                str[i] = j
            } 
        }
    }
    console.log(str.join(''))
}
     
toEmoji("张笑彬一辈子赛马冲冲冲")