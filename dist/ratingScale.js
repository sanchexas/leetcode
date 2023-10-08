function ratingScale(arr, scaleStyle){
    let max = Math.max(...arr);
    let originArr = JSON.stringify(arr);
    let resultY = '';
    let resultX = '';
    for(let y = 0; y < max; y++){
        resultX = '';
        for(let x = 0; x < arr.length; x++){
            arr[x] -= 1;
            if(arr[x] >= 0){
               resultX += ` ${scaleStyle.trim()} `; 
            }
            else{
                resultX += '   ';
            }
        }
        resultY = resultX + '\n' + resultY;
    }
    console.log(`${resultY}\n${originArr.toString().replace(/[^\w\s]/g, '  ')}`);
}
ratingScale([1,5,3,2,7,3,4,2], '▉');
console.log("hello world");
