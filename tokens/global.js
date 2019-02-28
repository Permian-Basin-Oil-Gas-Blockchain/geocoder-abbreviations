module.exports = () => {
    return {
        "^([\\u1100-\\u11FF\\u2E80-\\u2EFF\\u3000-\\u303F\\u3040-\\u309F\\u30A0-\\u30FF\\u3100-\\u312F\\u3130-\\u318F\\u31C0-\\u31EF\\u31F0-\\u31FF\\u3200-\\u32FF\\u3300-\\u33FF\\u3400-\\u4DBF\\u4E00-\\u9FFF\\uF900-\\uFAFF\\uFE30-\\uFE4F\\s]+)(\\s*)([0-9]+)-([0-9]+)(.*)$": "$1$5 $3"
    };
}
