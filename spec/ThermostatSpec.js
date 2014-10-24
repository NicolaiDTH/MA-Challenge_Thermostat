describe("Thermostat", function(){
 var thermostat;

 it("is initially at 20 degrees", function(){

  var thermostat = new Thermostat();
  expect(thermostat.temperature).toEqual(20)

 })

 it("has PSM on by default", function(){
  var thermostat = new Thermostat();
  expect(thermostat.powerSavingMode).toBe(true);
 })

 describe("Maximum Temperature", function(){
  it("is 25 degrees with PSM", function(){
   var thermostat = new Thermostat();
   expect(thermostat.maxiumumTemperature).toEqual(25);
  })
 })

});