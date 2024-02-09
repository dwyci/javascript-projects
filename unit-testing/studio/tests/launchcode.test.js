// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  test(" check that the value of organization is nonprofit", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test(" value of executiveDirector is Jeff" , function(){
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("  value of percentageCoolEmployees ", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

//programsOffered with a value of ["Web Development", "Data Analysis", "Liftoff"]
  test("  check appropriate values in array and number in array ", function(){
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3);

  });

 
  
});