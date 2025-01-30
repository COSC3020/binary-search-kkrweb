// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//


function binarySearch(list, element) 
{
    //nuking this again. Why I ever tried to do this recursively is beyond me
    var frontPos = 0;
    var endPos = list.length - 1;
    var centerPos;
    if(list.length == 0)
    {
        return -1;
    }
    centerPos = Math.floor(endPos / 2);
    while(frontPos <= endPos && ((centerPos >= frontPos) && (centerPos <= endPos)))
        {
            if(list[centerPos] == element)
            {
                return centerPos;
            }
            else if(element > list[centerPos])
            {
                frontPos = centerPos+1;
            }
            else if(element < list[centerPos])
            {
                endPos = centerPos-1;
            }
        }
    return -1;
}
