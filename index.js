// Add your functions here


const map=(arr,func) => {
    const emptyArr=[]
    arr.forEach(element => emptyArr.push(func(element)))
    return emptyArr
}


const reduce=(arr,func,start) => {
    let sum= start ? start : arr[0]
    arr= start ? arr : arr.slice(1,arr.length)
    arr.forEach(element=> sum=func(element,sum))
    return sum
}

