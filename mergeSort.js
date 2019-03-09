//不是原地排序算法
//空间复杂度O(n)
//稳定排序算法（相同大小的数据在排序前后不改变顺序）
//最好情况时间复杂度O(n*logn)
//最坏情况时间复杂度O(n*logn)
//平均情况时间复杂度O(n*logn)

//归并排序算法，n是数组长度
function mergeSort(array, n){
    mergeSort_c(array, 0, n-1);
}

//p是初始下标，
function mergeSort_c(array, p, r){
    if(p>=r){
        return;
    }
    q=(p+r)/2;
     // 分治递归
    mergeSort_c(array, p, q);
    mergeSort_c(array, q+1, r);
    // 将 A[p...q] 和 A[q+1...r] 合并为 A[p...r]
    merge(array[p...r], array[p...q], array[q+1...r])
  }
  
}