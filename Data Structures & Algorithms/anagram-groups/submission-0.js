class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
       const map = new Map();

       for(const key of strs){
        const chg = key.split("").sort().join();
        if(!map.has(chg)){
            map.set(chg,[])
        }
        map.get(chg).push(key)
       }
    return Array.from(map.values());
    }
}
