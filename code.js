// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//

function binarySearch(list, element) 
{
    //assumed sorted list
    var arrLen = list.length;
    var midPos = Math.floor(arrLen / 2);
    var midVal = list[midPos];

    if (midVal == element) 
    {
        return midPos;
    } 
    
    if (element > midVal) 
    {
        var result = binarySearch(list.slice(midPos + 1), element);
        if (result >= 0) 
        {
            return result + midPos + 1;
        } 
        else
        {
            return -1; //not found
        }
    } 
    
    return binarySearch(list.slice(0, midPos), element);
}
