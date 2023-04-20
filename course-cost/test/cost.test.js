describe('Test my course-cost', function () {
	


    it("it should return  invalid code", function () {
      
        
        assert.Equal("Invalid code", courseCost(px,2023-05-21))
	});

    it("it should return  invalid day", function () {
      
        
        assert.Equal("Invalid day", courseCost(r1,tyyi))
	});

     it("it should return  object", function () {
       
 	var results = {
			"status": "success",
			"code": "r1",
			"description": "Ruby on Rails intro",
	 		"cost": "",
			"discount": "",
			"amountDue": ""
 	};
        
        assert.deepEqual(results, courseCost(r1, 2023-05-21))
	});

});