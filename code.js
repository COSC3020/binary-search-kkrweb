// Kane Kriz
// COSC 3020
// Binary Search Exercise
// 29 January 2025
//

function binarySearch(list, element) 
{
//assumed sorted array input

    startIndex = 0;
    endIndex = list.length-1;

    while (startIndex <= endIndex) 
        {
        midIndex = Math.floor((startIndex + endIndex)/ 2);
        if(list[midIndex] == element) 
        {
            return midIndex; //if equal, return index
        } 
        else if(element > list[midIndex]) 
        {
            startIndex = midIndex+1; //focus on right side of sorted list, larger
        } 
        else 
        {
            endIndex = midIndex-1; //focus on left side of sorted list, smaller values
        }
    }
    
    //if it exits the while, element is not within the list
    //assuming that the list was properly sorted in the first place
    return -1;
}
