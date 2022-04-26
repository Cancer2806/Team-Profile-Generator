const Manager = require('../lib/Manager');

describe("Manager", () => {
  describe("Initialisation", () => {
    // test the initialisation of the subclass specific properties
    it("should return an object containing a string property 'officeNumber' when called with the 'new' keyword", () => {
      const ManagerObj = new Manager();

      expect("officeNumber" in ManagerObj).toEqual(true);
    });
    it("should return an object matching the name, id, email and officeNumber when called with 'new' keyword", () => {
      const testObj = {
        name: 'Roger Boss',
        id: 'M100100',
        email: 'Boss@that.com.au',
        officeNumber: '9804 7600',
      };
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj).toEqual(testObj);
    });
    
    // Test the methods of the subclass
    it("should return the Manager's officeNumber", () => {
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj.getOfficeNumber()).toEqual('9804 7600');
    });

    it("should return the Manager's category", () => {
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj.getRole()).toEqual('Manager');
    });
  });
});