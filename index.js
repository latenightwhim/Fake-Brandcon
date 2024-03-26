
var 후기들 = [
    ['1', '2', '3'],
    ['2', '3', '4'],
    ['3', '4', '4'],
]
var 단어사전 = new Set(후기들.flat())


var TF = []
var n = TF.length
var DF = []
var IDF = []
var TFIDF = []

for(const 후기 of 후기들){
    console.log(후기)
}