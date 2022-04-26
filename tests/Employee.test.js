const Employee = require('../lib/Employee');

describe("Employee", () => {
  describe("Initialisation", () => {
    // test the object class initialisation
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
    
    it("should return an object matching the name, id and email when called with 'new' keyword", () => {
      const employeeObj = new Employee('Roger That', 'N33756', 'Roger@that.com.au');

      const testObj = {
        name: 'Roger That',
        id: 'N33756',
        email: 'Roger@that.com.au'
      }

      expect(employeeObj).toEqual(testObj);
    });
    
    // test the classes methods
    it("should return the employee's name", () => {
      const value = "Roger"
      const employeeObj = new Employee(value);

      expect(employeeObj.getName()).toEqual(value);
    });
    
    it("should return the employee's id", () => {
      const employeeObj = new Employee('Roger That', 'N33756', 'Roger@that.com.au');

      expect(employeeObj.getId()).toEqual('N33756');
    });
    
    it("should return the employee's email", () => {
      const employeeObj = new Employee('Roger That', 'N33756', 'Roger@that.com.au');

      expect(employeeObj.getEmail()).toEqual('Roger@that.com.au');
    });
    
    it("should return the employee's category", () => {
      const employeeObj = new Employee('Roger That', 'N33756', 'Roger@that.com.au');

      expect(employeeObj.getRole()).toEqual('Employee');
    });
  });
});