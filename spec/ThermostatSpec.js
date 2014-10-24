describe("Thermostat", function(){
 var thermostat;

 beforeEach(function(){
  thermostat = new Thermostat();
 });

 it("is initially at 20 degrees", function(){
  expect(thermostat.temperature).toEqual(20)

 })

 it("has PSM on by default", function(){
  expect(thermostat.powerSavingMode).toBe(true);
 })

 describe("Maximum Temperature", function(){
  it("is 25 degrees with PSM", function(){
   expect(thermostat.maxiumumTemperature).toEqual(25);
  })
 })

});