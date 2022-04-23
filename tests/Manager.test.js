const Manager = require('../lib/Manager');

describe("Manager", () => {
  describe("Initialisation", () => {
    it("should return an object containing a string property 'name' when called with the 'new' keyword", () => {
      const ManagerObj = new Manager();

      expect("name" in ManagerObj).toEqual(true);
    });
    it("should return an object containing a string property 'id' when called with the 'new' keyword", () => {
      const ManagerObj = new Manager();

      expect("id" in ManagerObj).toEqual(true);
    });
    it("should return an object containing a string property 'email' when called with the 'new' keyword", () => {
      const ManagerObj = new Manager();

      expect("email" in ManagerObj).toEqual(true);
    });
    it("should return an object containing a string property 'officeNumber' when called with the 'new' keyword", () => {
      const ManagerObj = new Manager();

      expect("officeNumber" in ManagerObj).toEqual(true);
    });
    it("should return an object matching the name, id and email when called with 'new' keyword", () => {
      const testObj = {
        name: 'Roger Boss',
        id: 'M100100',
        email: 'Boss@that.com.au',
        officeNumber: '9804 7600',
      };
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj).toEqual(testObj);
    });
    
    it("should return the Manager's name", () => {
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj.getName()).toEqual('Roger Boss');
    });
    it("should return the Manager's id", () => {
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj.getId()).toEqual('M100100');
    });
    it("should return the Manager's email", () => {
      const ManagerObj = new Manager('Roger Boss', 'M100100', 'Boss@that.com.au', '9804 7600');

      expect(ManagerObj.getEmail()).toEqual('Boss@that.com.au');
    });
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