function reverseString(string) {
    if (string === '') {
        return '';
    }
    return reverseString(string.substring(1)) + string[0];    
}


function binarySearch(array, element) {
    let index = -1;
    let first = 0;
    let last = array.length - 1; 
    let median;

    function search() {
        if ((first - 1) === last) {
            return index;
        };

        median = Math.floor((first + last) / 2);
        
        if (element === array[median]) {
            index = median;
            return index;
        } else if (element < array[median]) {
            last = median - 1;
            return search();
        } else {
            first = median + 1;
            return search();
        }        
    };
    return search();    
}


const arr = [52, 68, 99, 158, 220, 230, 333, 1478, 2222];
const a = binarySearch(arr, 99);
console.log(a);