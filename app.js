let pronom = ["Mine", "yours", "our", "the", "you", "him", "her", "they"];
let adj = ["dark", "nice", "big", "great", "beautiful", "old", "wonderful"];
let noun = ["driver", "doctor", "light", "bird", "dog", "love", "people"];
let extension = [".com", ".net", ".us", ".es", ".io"];


for (let p = 0; p < pronom.length; p++) {
  for (let a = 0; a < adj.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      for (let e = 0; e < extension.length; e++) {
        let dominios = (`${pronom[p]}${adj[a]}${noun[n]}${extension[e]}`);
        console.log(dominios);
      }
    }
  }
}



