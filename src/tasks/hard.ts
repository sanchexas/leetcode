class Hard{
    /**
     * Median of Two Sorted Arrays

     * Given two sorted arrays nums1 and nums2 of size m and n respectively,
     * return the median of the two sorted arrays.
     * The overall run time complexity should be O(log (m+n)).
     * 
     * TOPICS:
     * -divide and conquer
     * -median
     * 
     * SOURCE:
     * -https://umath.ru/calc/mediana-chisel/#:~:text=%D0%9C%D0%B5%D0%B4%D0%B8%D0%B0%D0%BD%D0%BE%D0%B9%20%D1%80%D1%8F%D0%B4%D0%B0%20%D1%87%D0%B8%D1%81%D0%B5%D0%BB%20(%D0%B8%D0%BB%D0%B8%20%D0%BC%D0%B5%D0%B4%D0%B8%D0%B0%D0%BD%D0%BE%D0%B9,%D1%87%D0%B8%D1%81%D0%B5%D0%BB%20%D1%83%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D1%87%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D0%BE%20%D0%B2%D0%BE%D0%B7%D1%80%D0%B0%D1%81%D1%82%D0%B0%D0%BD%D0%B8%D1%8E%20%D1%80%D1%8F%D0%B4%D0%B0
     * -https://neerc.ifmo.ru/wiki/index.php?title=%D0%91%D1%8B%D1%81%D1%82%D1%80%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0
     * 
     * NOTE:
     *  I solved this problem by using quick sort. Its not actually quick lmao
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        const quickSort = (arr: number[]): number[] =>{
            if(arr.length < 2) return arr;
    
            let pivot: number = arr[arr.length - 1];
            let lessThanPivotNums: number[] = [];
            let biggerThanPivotNums: number[] = [];
            
            for(let i: number = 0; i < arr.length-1; i++){
                if(arr[i] < pivot){
                    lessThanPivotNums.push(arr[i]);
                }
                else{
                    biggerThanPivotNums.push(arr[i]);
                }
            }
            return quickSort(lessThanPivotNums).concat(pivot, quickSort(biggerThanPivotNums));
        }
        const sortedArr = quickSort([...nums1, ...nums2]);
        return (sortedArr.length % 2 === 0)
        ?
        (sortedArr[((sortedArr.length / 2) - 1)] + sortedArr[(sortedArr.length / 2)]) / 2 
        :
        sortedArr[Math.floor(sortedArr.length / 2)];
    };
}

export default new Hard;