class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        function checkCharCount(st) {
            let map = {}
            for(let ch of st){
                map[ch] = (map[ch] || 0)+1;
            }
            return map;
        }

        const sMap = checkCharCount(s);
        const tMap = checkCharCount(t);

        for (const [key, value] of Object.entries(sMap)) {
            if (value !== tMap[key]) return false;
        }
        return true;
    }
}
