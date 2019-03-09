//原地排序算法
//空间复杂度O(1)
//稳定排序算法（相同大小的数据在排序前后不改变顺序）
//最好情况时间复杂度）O(n)
//最坏情况时间复杂度O(n^2)
//平均情况时间复杂度O(n^2)
var array = [1,2,3,4];
function bubbleSort(array){
    for(let i=0;i<array.length;i++){
        let flag = false;
        for(let j=0;j<array.length-i-1;j++){
            if(array[i]>array[j]){
                flag = true;
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
        if(!flag){
            break;
        }
    }
}

bubbleSort(array);
console.log(array);