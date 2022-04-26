const Engineer = require('../lib/Engineer');

describe("Engineer", () => {
  describe("Initialisation", () => {
    // test the subclass specific properties are instantiated
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
    
    // test the subclass methods
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