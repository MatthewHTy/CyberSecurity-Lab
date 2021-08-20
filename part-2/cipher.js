const map = {
    a: "36/",
    b: "35/",
    c: "34/",
    d: "33/",
    e: "32/",
    f: "31/",
    g: "30/",
    h: "29/",
    i: "28/",
    j: "27/",
    k: "26/",
    l: "25/",
    m: "24/",
    n: "23/",
    o: "22/",
    p: "21/",
    q: "20/",
    r: "19/",
    s: "18/",
    t: "17/",
    u: "16/",
    v: "15/",
    w: "14/",
    x: "13/",
    y: "12/",
    z: "11/",
    "!": "10/",
    " ": '*'
  };
  
  let message = 'i love cryptography!'
  
  const cipher = (key, message) => {
    message = message.split('')
    let encrypted = ''
     for (let i = 0; i < message.length; i++){
      for(let prop in key){
        if(message[i] === prop){
          console.log(message[i])
          encrypted += key[prop]
        }
      }
    }
    return encrypted
  }
  
  const decipher = (key, message) => {
    message = message.split('')
    let decrypted = ''
    for (let i = 0; i < message.length; i++){
      for(let prop in key){
        if(message[i] === key[prop]){
          decrypted += prop
        }
      }
    }
    return decrypted
  }
  
  let encrypted = cipher(map, message)
  console.log(encrypted)
  let decrypted = decipher(map, encrypted)
  console.log(decrypted)
  