class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        function checkCharCount(st) {
            return st.split("").reduce((acc, ele) => {
                if (!acc[ele]) acc[ele] = 0;
                acc[ele]++;
                return acc;
            }, {});
        }

        const sMap = checkCharCount(s);
        const tMap = checkCharCount(t);

        for (const [key, value] of Object.entries(sMap)) {
            if (value !== tMap[key]) return false;
        }
        return true;
    }
}
