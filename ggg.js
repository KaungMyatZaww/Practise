/*
Problem Statement

Given two strings s (the main string) and t (the target), find the smallest substring in s that contains all the characters in t (including duplicates).
If no such substring exists, return an empty string "".

Example
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

// ADOBEC
// BECODEBA
// CODEBA
// BANC

Input: s = "a", t = "aa"
Output: ""   (since "a" does not contain 2 'a's)

Input: s = "aa", t = "aa"
Output: "aa"
*/

const string_one = 'ADOBECODEBANC';
const string_two = 'ABC';

function findTheSmalleestSubstring(str1, str2) {    
    if (str1.length === 0 || str2.length === 0) return '';


    const targetCharCount = {};
    for (let char of str2) {
        targetCharCount[char] = (targetCharCount[char] || 0) + 1;
    }
    // console.log("target/CharCount : ", targetCharCount);
    
    let left = 0;
    let right = 0;
    let required = Object.keys(targetCharCount).length;
    let formed = 0;
    const Counts = {};
    let answer = [Infinity, left, right];

    while (right < str1.length) {
        const char = str1[right];
        Counts[char] = (Counts[char] || 0) + 1;
        console.log(`Counts @ right ${right} :`, Counts);
        if (char in targetCharCount && Counts[char] === targetCharCount[char]) {
            formed++;
            console.log(`formed increased to ${formed} at right ${right}`);
        }
        while (left <= right && formed === required) {
            const char = str1[left];
            console.log(`char @ left ${left} : ${char}`);
            console.log("answer[0", answer[0]);
            console.log("test", right ,left + 1  , answer[0]);
            if (right - left + 1 < answer[0]) {
                answer = [right - left + 1, left, right];
                console.log(`answesr updated to :`, answer[0], answer[1], answer[2]);
            }

            const startChar = str1[left];
            Counts[startChar]--;
            console.log("targetCharCount",targetCharCount[startChar]);
            console.log("Counts[startChar] < targetCharCount[startChar]",Counts[startChar] < targetCharCount[startChar])
            if (targetCharCount[startChar] && Counts[startChar] < targetCharCount[startChar]) {
                formed--;
                console.log(`formed decreased to ${formed} at left ${left}`);
                console.log("Counts after decreasing : ", Counts, "while startchar is ", startChar);
            }
            left++;
        }
        right++;

        // console.log("answer", answer);
        // console.log("ANSWER ", str1.slice(answer[1], answer[2] + 1));
    }
        

}

findTheSmalleestSubstring(string_one, string_two);
