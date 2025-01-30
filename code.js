// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//


function binarySearch(list, element) 
{
    //nuked this twice because I tried to do it recursively
    var frontPos = 0;
    var endPos = list.length - 1;
    var centerPos;
    
    if(list.length == 0)
    {
        return -1;
    }
    
   while(frontPos <= endPos)// && ((centerPos >= frontPos) && (centerPos <= endPos)))
    {
        centerPos = Math.floor((frontPos + endPos) / 2);
        if(list[centerPos] == element)
        {
            while(centerPos > 0 && (list[centerPos - 1] == element))
            {
                centerPos--;
            }
            return centerPos;
        }
        else if(element > list[centerPos])
        {
            frontPos = centerPos + 1;
        }
        else if(element < list[centerPos])
        {
            endPos = centerPos - 1;
        }
    }
    return -1;
}
