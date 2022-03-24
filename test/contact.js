const mongoose = require("mongoose");
const Appartment = require('../models/appartment');
process.env.NODE_ENV = 'MONGO_URI';
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index');
const appartment = require("../models/contact");
const should = chai.should();


chai.use(chaiHttp);

//parent block
describe('Appartments', () => {
	beforeEach((done) => { //Before each test we empty the database
		Appartment.remove({}, (err) => { 
		   done();		   
		});		
	})












    
});