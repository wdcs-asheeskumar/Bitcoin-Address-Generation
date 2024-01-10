const Mnemonic = require("bitcore-mnemonic");
const bitcore = require("bitcore-lib");

var code = new Mnemonic(); // Generating mnemonics
var phrase = code.toString();

const seed = Mnemonic(phrase).toSeed(); // Generating seed

const hdPrivateKey = bitcore.HDPrivateKey.fromSeed(seed); // Extended private key
const hdPublicKey = hdPrivateKey.hdPublicKey;

const derivedPrivateKey = hdPrivateKey.derive("m/0'/0/0"); // derive the child keys
 
const privateKey = derivedPrivateKey.privateKey;

const publicKey = derivedPrivateKey.publicKey; // Generate the public key

const address = bitcore.Address(publicKey); // Address generated from the public key

console.log("Generating Mnemonics", phrase);
console.log("Generating Seed", seed);
console.log("extended private key",hdPrivateKey.toString());
console.log("child private key",derivedPrivateKey.toString());
console.log("This is the public key", publicKey.toString());
console.log("This is the address derived from the public key,", address.toString());
console.log("this is the child private key", privateKey.toString());
console.log("this is the master public key,", hdPublicKey.toString());