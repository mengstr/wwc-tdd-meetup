var expect = require('chai').expect;
var Cs=require('../lib/stringcalc');


describe('Add function',function(){

	it('Should return zero for an empty string', function() {
		var res=Cs.add('');
		expect(res).to.equal(0);
	})

	it('Should return 1 for "1"', function() {
		var res=Cs.add('1');
		expect(res).to.equal(1);
	})

	it('Should return 10 for "2,2,2,2,2"', function() {
		var res=Cs.add('2,2,2,2,2');
		expect(res).to.equal(10);
	})

	it('Should return 6 for "1,2\\n3"', function() {
		var res=Cs.add('1,2\n3');
		expect(res).to.equal(6);
	})

	it('Should return 9 for "\\;\\n2,3;4"', function() {
		var res=Cs.add('\\;\n2,3;4');
		expect(res).to.equal(9);
	})

	it('Should throw error for missing newline "\\;2,3;4"', function() {
		expect(function(){
    		var res=Cs.add('\\;2,3;4');
		}).to.throw(Error);
	})

	it('Should return 1001 for "2,1000,999"', function() {
		var res=Cs.add('2,1000,999');
		expect(res).to.equal(1001);
	})


});
