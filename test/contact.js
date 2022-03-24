const mongoose = require("mongoose");
const Contact = require('../models/contact');
process.env.NODE_ENV = 'MONGO_URI';
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index');
const should = chai.should();


chai.use(chaiHttp);

//parent block
describe('Contacts', () => {
	beforeEach((done) => { //Before each test we empty the database
		Contact.remove({}, (err) => { 
		   done();		   
		});		
	})













});