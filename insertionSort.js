//原地排序算法
//空间复杂度O(1)
//稳定排序算法（相同大小的数据在排序前后不改变顺序）
//最好情况时间复杂度）O(n)
//最坏情况时间复杂度O(n^2)
//平均情况时间复杂度O(n^2)
var array = [1,3,5,2,4];
function insertionSort(array){
    for(let i=1;i<array.length;i++){
        let value = array[i];
        let j = i-1;
        for(;j>=0;j--){
            if(array[j]>value){
                array[j+1]=array[j];
            }else{
                break;
            }
        }
        array[j+1] = value;
    }
}

insertionSort(array);
console.log(array);