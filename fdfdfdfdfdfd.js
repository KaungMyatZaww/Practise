const string_one = 'ADOBECODEBANC';
const string_two = 'ABC';

function smallestSubstring(str1 , str2) {
    if (str1.length === 0 || str2.length === 0) return '';

    const targetCharCount = {};
    for (let char of str2) {
        targetCharCount[char] = (targetCharCount[char] || 0) + 1;
    }
    
    let left = 0;
    let right = 0;
    let required = Object.keys(targetCharCount).length;
    let formed = 0;
    const Counts = {};
    let answer = [Infinity, left, right];

    while (right < str1.length) {
        const characterInStr1 = str1[right];
        // add the character from the right pointer to the Counts
        Counts[characterInStr1] = (Counts[characterInStr1] || 0) + 1;


        // Check if the current character added is included in the targerCharCount and if its count matches
        // if yes increase the formed count 
        if (targetCharCount[characterInStr1] && Counts[characterInStr1] === targetCharCount[characterInStr1]) {
            formed ++;
        };
        // Try and contract the window till the point it ceases to be 'desirable'
        while (left <= right && formed === required) {
            const characterInStr1 = str1[left];

            // Save the smallest window until now
            if (right - left + 1 < answer[0]) {
                answer = [right - left + 1, left, right];
            }

            // Remove the character at the left pointer from the Counts
            Counts[characterInStr1]--;
            // If the character is part of targetCharCount and its count in Counts is less than in targetCharCount
            // we decrease the formed count
            if (targetCharCount[characterInStr1] && Counts[characterInStr1] < targetCharCount[characterInStr1]) {
                formed --;
            }
            // Move the left pointer ahead to look for a new window
            left ++;
        }
        // Keep expanding the window by moving right pointer ahead
        right ++;
        console.log("answer", answer);
        console.log("ANSWER ", str1.slice(answer[1], answer[2] + 1));

    }
}

smallestSubstring(string_one, string_two);