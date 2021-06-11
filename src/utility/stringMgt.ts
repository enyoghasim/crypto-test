
  
  // GET SHORTENED LENGTH OF STRING
  const getTruncatedText = (payload:string, nlength:number) => {
    if (payload?.length > nlength) return `${payload.slice(0, nlength)}...`;
    else return payload;
  };
  
  // GENERATE RANDOM CHARACTERS
  const generateRandomString = (length:number) => {
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    let randomstring = "";
    for (let i = 0; i < length; i++) {
      let rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    return randomstring;
  };
  
  export {
    getTruncatedText,
    generateRandomString,
  };