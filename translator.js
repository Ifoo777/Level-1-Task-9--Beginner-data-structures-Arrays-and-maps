let translator = new Map();
let user = prompt ("What would you like to translate?") //request user for input 

// We use the .set function to add key-value pairs to the map. (english to afrikaans)

translator.set("blue", "blou");
translator.set("red", "rooi");
translator.set("yellow", "geel");
translator.set("green", "groen");
translator.set("orange", "oranje");
translator.set("purple", "purper");
translator.set("black", "swart");
translator.set("white", "wit");
translator.set("brown", "bruin");

console.log(translator.get(user)); //return final output 

