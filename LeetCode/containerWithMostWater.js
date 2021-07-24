const maxArea = height => {
    let left = 0;
    let right = height.length - 1;
    let biggestArea = 0;

    while (left < height.length - 1) {
        let l = right - left;
        let h = 0;
        
        if (height[left] >= height[right]) h = height[right];
        if (height[left] < height[right]) h = height[left];
        const area = l * h;
        if (biggestArea < area) biggestArea = area;
        if (right > left) right--;
        if (right <= left) left++, right = height.length - 1;
    }
    return biggestArea;
};

// console.log(maxArea([1,8,6,2,5,4,8,3,7])); //49
console.log(maxArea([2,3,4,5,18,17,6])); // 17