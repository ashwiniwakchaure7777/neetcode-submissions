class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
        s = s.split("").join(" ");

        let start = 0;
        let end = s.length -1;
        while(start <= end){
            if(s[start] !== s[end])return false;
            start++;
            end--;
        }
        return true;
    }
}
