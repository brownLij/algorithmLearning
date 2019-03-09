//不是原地排序算法
//空间复杂度O(1)
//稳定排序算法（相同大小的数据在排序前后改变顺序）*需要从尾部开始排
//最好情况时间复杂度
//最坏情况时间复杂度
//平均情况时间复杂度O(n+k) (k是计数范围)
function countingSort(a){
    // 查找数组中数据的范围
    let max = a[0];
    for(let i=1;i<a.length;i++){
        if(max<a[i]){
            max = a[i];
        }
    }

    // 申请一个计数数组 c，下标大小 [0,max]
    let c = [];
    for(let i=0;i<=max;i++){
        c[i]=0;
    }

    //计算每个元素的个数
    for(let i=0;i<a.length;i++){
        c[a[i]]++;
    }

    //累加
    for(let i=1;i<=max;i++){
        c[i] = c[i-1]+c[i];
    }

    //临时数组，存放排序后的数据
    let r = [];
    for(let i=a.length-1;i>=0;i--){
        r[c[a[i]]-1] = a[i];
        c[a[i]]--;
    }

    for(let i=0;i<a.length;i++){
        a[i] = r[i];
    }
}

var array = [0,1,0,3,5,0,1]
countingSort(array);
console.log(array);
