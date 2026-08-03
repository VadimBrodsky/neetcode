class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
        
        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if (Object.keys(pairs).includes(char)) {
                stack.unshift(char);
                continue;
            } else if (Object.values(pairs).includes(char)) {
                if (pairs[stack[0]] === char) {
                    stack.shift();
                    continue;
                }
            }

            return false;
        }

        return stack.length === 0;
    }
}
