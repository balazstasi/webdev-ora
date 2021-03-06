import assert = require("assert");

/*
    * [Nehezseg: ELEMENTARY]
    *    Forditott String

  TODO:
  Fordits meg egy stringet
  
  ? minden feladatot a tanultak alapjan ugy futtathatsz, hogy:
    ? Ha nincs feltelpitve a typescript akkor: npm install -g typescript 
    ?    Compile: tsc <fajnlev>
    ?    Run: node <fajlnev>
  ? es a konzolon mar lathatod is az eredmenyt.

  BONUSZ A HELYES TIPUSOZASERT, bemenet kimenet
*/

function backwardString(value: string): string {
  let newString: string = "";

  for (let i = value.length - 1; i >= 0; i--) {
    newString += value[i];
  }

  return newString;
}

function backwardStringRecursion(value: string): string {
  if (value === "") return "";
  else return backwardStringRecursion(value.substr(1)) + value.charAt(0);
}

// TESZTELESHEZ - ne nyulj hozza, mert maskepp nem fog mukodni a tesztelese az eredmenynek
try {
  assert.equal(backwardString("val"), "lav");
  assert.equal(backwardString(""), "");
  assert.equal(backwardString("ohho"), "ohho");
  assert.equal(backwardString("123456789"), "987654321");
  console.log("✅Siker✅");
} catch (err) {
  console.log("❌Hibas Eredmeny❌");
  console.log(console.log(err));
}
