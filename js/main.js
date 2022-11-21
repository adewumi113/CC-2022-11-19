// DESCRIPTION:
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples

// "4556364607935616" -> "############5616"
//      "64607935616" ->      "#######5616"
//                "1" ->                "1"
//                 "" ->                 ""

// "What was the name of your first pet?"

// "Skippy" -> "##ippy"

// "Nananananananananananananananana Batman!" ->
// "####################################man!"

function maskify (cc) {
  cc = cc.split('')   //converts the string to array by using split() method
  for (i=0; i<cc.length-4; i++) //loop through the array with for lopp to convert the items in the array to # except the last four items
      cc[i] = '#'
  return cc.join('')  //join the array using join() method to convert the result back to string
}
maskify("4556364607935616")
