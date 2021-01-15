var productExceptSelf = function (arr) {
    results = []
    left = []
    right = []
    for (var i = 0; i < arr.length; i++) {
        if (i === 0) {
            left.push(1)
            continue
        }
        var p = left[i - 1] * arr[i - 1]
        left.push(p)
    }

    for (var i = arr.length - 1; i >= 0; i--) {
        if (i === arr.length - 1) {
            right.push(1)
            continue
        }
        var p = right[arr.length - i - 2] * arr[i + 1]
        right.push(p)
    }
    right = right.reverse()

    for (var i = 0; i < arr.length; i++) {
        results[i] = left[i] * right[i]
    }
    return results
};