class Heap {
  heap = []
  constructor(cmp = undefined) {
    this.heap = []
    if (cmp && typeof cmp !== 'function') {
      this.cmp = cmp
    }
    else {
      this.cmp = (a, b) => { return a - b }
    }
  }
  log() {
    console.log(this.heap)
  }

  changeKey = (index, value) => {

    let temp;
    let parentIndex = Math.floor(index / 2)
    if (this.heap[index]) {
      // refactor branch tree 
      while (parentIndex >= 0 && this.cmp(this.heap[index], this.heap[parentIndex]) > 0) {
        temp = this.heap[index]
        this.heap[index] = this.heap[parentIndex]
        this.heap[parentIndex] = temp
        index = parentIndex
        parentIndex = Math.floor(parentIndex / 2)
      }
      this.heapify(index)

    }
  }

  heapify = (index) => {
    //  ok branch swap elements
    let temp
    let left = 2 * index + 1
    let right = 2 * index + 2
    let exct = index
    if (left < this.heap.length && this.cmp(this.heapify[left], this.heapify[index])) {
      left = exct
    }
    if (right < this.heap.length && this.cmp(this.heapify[right], this.heapify[index])
      && this.cmp(this.heapify[right], this.heapify[left])
    ) {
      right = exct;
    }
    if(exct !== index){
      temp = this.heap[exct];
       this.heap[exct]  = this.heap[index]
       this.heap[index] = temp
      this.heapify(exct)
    }
  }
  add(value) {
    this.heap.push(value)
    this.changeKey(this.heap.length - 1, value)
  }


}
var heap = new Heap()
heap.add(2)

heap.add(1)
heap.add(4)

heap.add(3)
heap.add(7)
heap.add(9)
heap.add(6)
heap.add(19)
heap.add(91)


heap.log()