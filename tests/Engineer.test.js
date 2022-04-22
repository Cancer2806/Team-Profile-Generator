const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("Initialisation", () => {
    it("should return an object containing a string property 'name' when called with the 'new' keyword", () => {
      const EngineerObj = new Engineer();

      expect("name" in EngineerObj).toEqual(true);
    });
    it("should return an object containing a string property 'id' when called with the 'new' keyword", () => {
      const EngineerObj = new Engineer();

      expect("id" in EngineerObj).toEqual(true);
    });
    it("should return an object containing a string property 'email' when called with the 'new' keyword", () => {
      const EngineerObj = new Engineer();

      expect("email" in EngineerObj).toEqual(true);
    });
    it("should return an object containing a string property 'github' when called with the 'new' keyword", () => {
      const EngineerObj = new Engineer();

      expect("github" in EngineerObj).toEqual(true);
    });
    it("should return an object matching the name, id, email and github when called with 'new' keyword", () => {
      const EngineerObj = new Engineer('Engineer Bob', 'E887766', 'Engineer@that.com.au', 'Cancer2806');

      const testObj = {
        name: 'Engineer Bob',
        id: 'E887766',
        email: 'Engineer@that.com.au',
        github: 'Cancer2806',
      };

      expect(EngineerObj).toEqual(testObj);
    });
    it("should return the Engineer's name", () => {
      const EngineerObj = new Engineer('Engineer Bob', 'E887766', 'Engineer@that.com.au', 'Cancer2806');

      expect(EngineerObj.getName()).toEqual('Engineer Bob');
    });
    it("should return the Engineer's id", () => {
      const EngineerObj = new Engineer('Engineer Bob', 'E887766', 'Engineer@that.com.au', 'Cancer2806');

      expect(EngineerObj.getId()).toEqual('E887766');
    });
    it("should return the Engineer's email", () => {
      const EngineerObj = new Engineer('Engineer Bob', 'E887766', 'Engineer@that.com.au', 'Cancer2806');

      expect(EngineerObj.getEmail()).toEqual('Engineer@that.com.au');
    });
    it("should return the Engineer's github address", () => {
      const EngineerObj = new Engineer('Engineer Bob', 'E887766', 'Engineer@that.com.au', 'Cancer2806');

      expect(EngineerObj.getGithub()).toEqual('Cancer2806');
    });
    it("should return the Engineer's category", () => {
      const EngineerObj = new Engineer('Engineer Bob', 'E887766', 'Engineer@that.com.au', 'Cancer2806');

      expect(EngineerObj.getRole()).toEqual('Engineer');
    });
  });
});