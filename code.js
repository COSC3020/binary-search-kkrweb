// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//

function binarySearch(list, element) 
{
//assumed sorted array input
    var arrLen = list.length();
    midPos = Math.floor(arrLen/2);

    if(list[midPos] == element)
    {
        return midPos;
    }
    else if(element > (list[midPos]))
    {
        binarySearch(list.slice(midPos+1, arrLen), element);
    }
    else if(element < (list[midPos]))
    {
        binarySearch(list.slice(0, midPos-1), element);
    }

        //all fails
    else if(arrLen == 0)
    {
        return -1;
    }
    
}
