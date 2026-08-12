class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = {
            "(": ")",
            "{": "}",
            "[": "]",
        };
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            let char = s[i];
            if ("({[".includes(char)) {
                stack.unshift(char);
                continue;
            } else if (")}]".includes(char)) {
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
