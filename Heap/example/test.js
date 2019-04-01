// console.log(require('../heap'));
// console.log(Head)
class Heap2 {
    heap = []

    constructor(cmp){
        if(typeof cmp !== 'function'){
            this.cmp = cmp
        }
        else{
            this.cmp = (a , b) => { return a -b }
        }
    }
    changeKey(index , value)  {
        
    }
    heapify(index){

    }
    add(value) {
        this.head.push(value)
        // sort now when it add in arr 
        this.changeKey(this.heap.length , value)
    }
    extract(){

    }
}