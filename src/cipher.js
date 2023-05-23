const cipher = {
  encode: function (offset, message) {
    message = message.toUpperCase()
    if (typeof offset !== "number" || typeof message !== "string") {
      throw new TypeError("Wrong argument types");
    }

    const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++) {
      const letterInMessage = message[i]
      const letterPositionInAlphabet = alphabeth.indexOf(letterInMessage)
      if (letterPositionInAlphabet !== -1) {
        const encryptedLetterPositionInAlphabet = (letterPositionInAlphabet + offset) % alphabeth.length
        const encryptedLetter = alphabeth[encryptedLetterPositionInAlphabet];
        encryptedMessage += encryptedLetter;
      } else {
        encryptedMessage += letterInMessage;
      }
    }
    return encryptedMessage;
  },
  decode: function (offset, encryptedMessage) {
    encryptedMessage = encryptedMessage.toUpperCase()
    if (typeof offset !== "number" || typeof encryptedMessage !== "string") {
      throw new TypeError("Wrong argument types");
    }

    const alphabeth = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let decryptedMessage = "";
    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedLetter = encryptedMessage[i]
      const encryptedLetterPositionInAlphabet = alphabeth.indexOf(encryptedLetter)
      if (encryptedLetterPositionInAlphabet !== -1) {
        let decryptedLetterPositionInAlphabet = (encryptedLetterPositionInAlphabet - offset) % alphabeth.length
        ///console.log('decryptedLetterPositionInAlphabet', decryptedLetterPositionInAlphabet);
        if (decryptedLetterPositionInAlphabet<0){
          decryptedLetterPositionInAlphabet = alphabeth.length + decryptedLetterPositionInAlphabet

        }
        const decryptedLetter = alphabeth[decryptedLetterPositionInAlphabet];
        //console.log ('decryptedLetter', decryptedLetter)
        decryptedMessage += decryptedLetter;
      } else {
        decryptedMessage += encryptedLetter;
      }
    }
    return decryptedMessage;
  },
};
export default cipher;
