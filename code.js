// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//
function binarySearch(list, element) 
{
    //assumed sorted list
    var arrLen = list.length;

    if (arrLen == 0) 
    {
        return -1; 
    }

    var midPos = Math.floor(arrLen / 2);
    var midVal = list[midPos];

    if (midVal == element) 
    {
        return midPos; //found, returns index of match
    }

    if (element > midVal)
    {
        var result = binarySearch(list.slice(midPos + 1), element);
        if (result == -1)
        {
            return -1; //element not found
        }
        return midPos + 1 + result; // Adjust index to account for slicing
    }

    return binarySearch(list.slice(0, midPos), element);
}
