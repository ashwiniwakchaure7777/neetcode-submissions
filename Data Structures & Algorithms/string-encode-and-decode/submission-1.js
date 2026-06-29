class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = "";
        for (let val of strs) {
            str += val.length + "#" + val;
        }
        return str;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let arr = [];
        let i = 0;
        while(i < str.length){
            let j = i;
            while(str[j] != "#"){
                j++;
            }

            const iniLgt = str.length;
            const lgt = Number(str.slice(0,j))
            arr.push(str.slice(j+1,j+1+lgt));
            str = str.slice(j+1+lgt, iniLgt)
        }

        return arr;
    }
}
