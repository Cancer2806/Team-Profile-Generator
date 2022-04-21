const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Initialisation", () => {
    it("should return an object containing a string property 'name' when called with the 'new' keyword", () => {
      const employeeObj = new Employee();
      
      expect("name" in employeeObj).toEqual(true);
    });
    it("should return an object containing a string property 'id' when called with the 'new' keyword", () => {
      const employeeObj = new Employee();

      expect("id" in employeeObj).toEqual(true);
    });
    it("should return an object containing a string property 'email' when called with the 'new' keyword", () => {
      const employeeObj = new Employee();

      expect("email" in employeeObj).toEqual(true);
    });
  });
});