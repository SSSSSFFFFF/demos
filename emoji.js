var emojis = {
    "🐴": "马，妈",
    "🐛": "冲，虫",
    "👶": "弟，张笑彬",
    "☕": "杯子，辈子"
}

function toEmoji(str) {
    // console.log(Object.values(emojis))
    for(i in emojis){
        var arr = emojis[i].split("，");
        for (let j = 0; j < arr.length; j++) {
            str = str.replace(new RegExp(arr[j],'g'),i)
        }
    }
    console.log(str)
}

toEmoji("张笑彬一辈子赛马冲冲冲")