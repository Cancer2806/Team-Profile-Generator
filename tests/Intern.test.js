const Intern = require('../lib/Intern');

describe("Intern", () => {
  describe("Initialisation", () => {
    // test instantiation of the subclass specific properties
    it("should return an object containing a string property 'school' when called with the 'new' keyword", () => {
      const internObj = new Intern();

      expect("school" in internObj).toEqual(true);
    });
    
    it("should return an object matching the name, id, email and school when called with 'new' keyword", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      const testObj = {
        name: 'New Junior',
        id: 'I665544',
        email: 'Intern@that.com.au',
        school: 'Scarborough',
      };

      expect(internObj).toEqual(testObj);
    });
    
    // test the subclass specific methods
    it("should return the Intern's school", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getSchool()).toEqual('Scarborough');
    });
    it("should return the Intern's category", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getRole()).toEqual('Intern');
    });
  });
});