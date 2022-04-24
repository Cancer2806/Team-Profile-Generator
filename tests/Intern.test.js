const Intern = require('../lib/Intern');

describe("Intern", () => {
  describe("Initialisation", () => {
    it("should return an object containing a string property 'name' when called with the 'new' keyword", () => {
      const internObj = new Intern();

      expect("name" in internObj).toEqual(true);
    });
    it("should return an object containing a string property 'id' when called with the 'new' keyword", () => {
      const internObj = new Intern();

      expect("id" in internObj).toEqual(true);
    });
    it("should return an object containing a string property 'email' when called with the 'new' keyword", () => {
      const internObj = new Intern();

      expect("email" in internObj).toEqual(true);
    });
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
    it("should return the Intern's name", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getName()).toEqual('New Junior');
    });
    it("should return the Intern's id", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getId()).toEqual('I665544');
    });
    it("should return the Intern's email", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getEmail()).toEqual('Intern@that.com.au');
    });
    it("should return the Intern's school", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getSchool()).toEqual('Scarborough');
    });
    it("should return the Intern's category", () => {
      const internObj = new Intern('New Junior', 'I665544', 'Intern@that.com.au', 'Scarborough');

      expect(internObj.getRole()).toEqual('☕ Intern');
    });
  });
});