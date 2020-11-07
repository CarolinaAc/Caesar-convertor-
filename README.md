# Caesar cipher

Built with HTML, CSS and javascript. At present is able to code and decode text at key 13.

## Tools:

- HTML
- Vanilla JavaScript
- SCSS with Visual Studio Code Live Sass Compiler extension.

## Plan:

- [x] Insert new text area to be able to change the key with the value in it.
- [x] Make webpage responsive
- [x] Improve aesthetics.
- [ ] Improve accessibility
- [ ] Testing\*

\* need to refactor some of the functions

## Testing:

- [ ] rot function
  - [ ] Decodes with any key
  - [ ] Decodes strings with capital and small letters.
  - [ ] Decodes strings containing numbers and special characters correctly.
  - [ ] If key is not a number, key = 0
- [ ] getKey, getNormal and getCipher functions (refactor them to test them)
  - [ ] getNormal and getCipher functions:
    - [ ] It returns the expected string
  - [ ] getKey function:
    - [ ] It returns a number between 0 and 26
    - [ ] It returns the expected number
- [ ] anyFunction function (check how to test it)
- [ ] ciph function
  - [ ] lastFun = 'ciph'
  - [ ] key should be the correct number
  - [ ] ciphertext should be the correct text
- [ ] deciph function
  - [ ] lastFun = 'deciph'
  - [ ] key should be the correct number
  - [ ] ciphertext should be the correct text
