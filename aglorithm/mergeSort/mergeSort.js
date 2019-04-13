function MergeSort(arr = [] ,name = ''){
    console.log('arrr ====> ',arr , name)
   
    const midd =  arr.length / 2
    const left = arr.slice( 0 , midd)
    const right =  arr.slice(midd )
    if(arr.length < 2) {
        return arr.sort()
    }
    return mergeTopDown(MergeSort(left,'left'),MergeSort(right, 'right'))
}
function mergeTopDown(left, right) {
    const array =[]
  
   while(left.length && right.length) {
     if(left[0] < right[0]){
       array.push(left.shift())
     }
     else {
       array.push(right.shift())
     }
   }
    console.log('array ==== >',array , right)
    return array.concat(left.concat(right));
  }
  
const a = MergeSort([1,23, 6, 7,78 , 2])
console.log('result', a)