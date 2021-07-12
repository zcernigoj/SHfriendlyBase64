# SHfriendlyBase64

This project contains 

- The code that is used in [EO Browser](https://github.com/sentinel-hub/EOBrowser) to encode and decode the evalscript before it's sent to the backend (if WMS is used).
  - The original code is in https://github.com/sentinel-hub/EOBrowser/blob/master/src/utils/base64MDN.js
  - The raw code is also available at https://zcernigoj.github.io/SHfriendlyBase64/shfriendlybase64.js
  - usage:
    - encode: `const encodedString = b64DecodeUnicode(originalString);`
    - decode: `const decodedString = b64DecodeUnicode(encodedString);`
- Function for trimming the trailing spaces in a multi-line string.
  - The raw code is available at https://zcernigoj.github.io/SHfriendlyBase64/stringManipulation.js
  - usage:
    - `const trimmedString = removeTrailingSpaces(string);`


Web interface available at https://zcernigoj.github.io/SHfriendlyBase64/
The web interface contains:
- encoding and decoding with solved ["Unicode problem"](https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem)
- encoding and decoding with `btoa()` and `atob()`
- URL encoding and decoding
- trimming the trailing spaces in a multi-line string 