var assert = {
  isTrue: function(assertionToCheck){
    if (!assertionToCheck) {
      throw new Error("Assertion failed: "+ assertionToCheck + " is not truthy");
    }
    else {
      alert("YAYYY..your test has passed!");
    }
  
  }
};