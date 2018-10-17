var expect = {
    isTrue: function(value) {
        if (!value) {
            throw new Error("Assertion failed: " + value + " is not truthy");
        } else {
            console.log('test passed')
        }
    },

    isEmpty: function(input) {
        if (!input.length === 0) {
            throw new Error("Assertion failed: " + input + " is not empty");
        } else {
            console.log('test passed')
        }
    },

    toContain: function(input) {
        if (!input.length < 0) {
            throw new Error("Assertion failed: " + input + " is not empty");
        } else {
            console.log('test passed')
        }
    },

    toIncludeStr: function(value, strs) {
        if (!(value.find((str) => str === strs))) {
            throw new Error("Assertion failed: " + value + " does not contain " + strs);
        } else {
            console.log('string: ' + strs + ' was found!!! in object of ' + value + ' :)')
        }   
    },

    toEqual: function(input, matcher) {
        if (!input === matcher) {
            throw new Error("Assertion failed: " + input + " does not match " + mather);
            } else {
        console.log('Match')
        }
    },

};