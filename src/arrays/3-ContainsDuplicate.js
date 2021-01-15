var containsDuplicate = function(nums) {
    const length = nums.length
    if(length <= 1) return false;
    
    let table = new Set(nums)
    if (table.size != length) return true
    else return false
}