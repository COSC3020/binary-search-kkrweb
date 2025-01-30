// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//

function binarySearch(list, element) 
{
    //assumed sorted array input
    var arrLen = list.length;
    var midPos = Math.floor(arrLen/2);
    if(list[midPos] == element)
    {
        return midPos;
    }
    else if(element > list[midPos])
    {
        var result = binarySearch(list.slice(midPos+1), element);
        if (result >= 0)
        {
            return result + midPos + 1;
        }
        else
        {
            return -1;
        }
    }
    else if(element < list[midPos])
    {
        return binarySearch(list.slice(0, midPos), element);
    }
    //all fails
    return -1;
}

