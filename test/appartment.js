const mongoose = require("mongoose");
const Appartment = require('../models/appartment');
process.env.NODE_ENV = 'MONGO_URI';
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index');
const should = chai.should();


chai.use(chaiHttp);

//parent block
describe('Appartments', () => {
	beforeEach((done) => { //Before each test we empty the database
		Appartment.remove({}, (err) => { 
		   done();		   
		});		
	});
 /*
  * Test the /GET route
  */
  describe('/GET appartment', () => {
	  it('it should GET all the appartments', (done) => {
			chai.request(index)
		    .get('/api/v1/appartment')
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('array');
			  	res.body.length.should.be.eql(0);
		      done();
		    });
	  });
  });
 /*
  * Test the /POST route
  */
  describe('/POST appartment', () => {
	  it('it should not POST a appartment without  description', (done) => {
	  	let appartment = {
	  		type_of_room: "Single room",
	  		description: "Room for an individual",
	  		price: 350
	  	}
			chai.request(index)
		    .post('/api/v1/appartment')
		    .send(appartment)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('errors');
			  	res.body.errors.should.have.property('description');
			  	res.body.errors.description.should.have.property('kind').eql('required');
		      done();
		    });
	  });
	  it('it should POST a appartment ', (done) => {
	  	let appartment = {
            type_of_room: "Single Room",
	  		description: "Room for an individual",
	  		price: 350

	  	}
			chai.request(index)
		    .post('/api/v1/appartment')
		    .send(appartment)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('message').eql('Appartment successfully added!');
			  	res.body.appartment.should.have.property('type_of_room');
			  	res.body.appartment.should.have.property('description');
			  	res.body.appartment.should.have.property('price');
		      done();
		    });
	  });
  });
 /*
  * Test the /GET/:id route
  */
  describe('/GET/:id appartment', () => {
	  it('it should GET a appartment by the given id', (done) => {
	  	let appartment = new Appartment({ type_of_room: "Single room",
           description: "Room for an individual", price: 350 });
	  	appartment.save((err, appartment) => {
	  		chai.request(index)
		    .get('/api/v1/appartment/' + appartment.id)
		    .send(appartment)
		    .end((err, res) => {
			  	res.should.have.status(200);
			  	res.body.should.be.a('object');
			  	res.body.should.have.property('type_of_room');
			  	res.body.should.have.property('description');
			  	res.body.should.have.property('price');
			  	res.body.should.have.property('_id').eql(appartment.id);
		      done();
		    });
	  	});
			
	  });
  });
 /*
  * Test the /PUT/:id route
  */
  describe('/PUT/:id appartment', () => {
	  it('it should UPDATE a appartment given the id', (done) => {
	  	let appartment = new Appartment({type_of_room: "Single room", description: "A room for an individual", price: 350})
	  	appartment.save((err, appartment) => {
				chai.request(index)
			    .put('/api/v1/appartment/' + appartment.id)
			    .send({type_of_room: "Single room", description: "A room for an individual", price: 350})
			    .end((err, res) => {
				  	res.should.have.status(200);
				  	res.body.should.be.a('object');
				  	res.body.should.have.property('message').eql('Appartment  updated!');
				  	res.body.appartment.should.have.property('price').eql(350);
			      done();
			    });
		  });
	  });
  });
 /*
  * Test the /DELETE/:id route
  */
  describe('/DELETE/:id appartment', () => {
	  it('it should DELETE a appartment given the id', (done) => {
	  	let appartment = new Appartment({type_of_room: "Single room", description: "Room for an individual", price: 350})
	  	appartment.save((err, appartment) => {
				chai.request(index)
			    .delete('/api/v1/appartment/' + appartment.id)
			    .end((err, res) => {
				  	res.should.have.status(200);
				  	res.body.should.be.a('object');
				  	res.body.should.have.property('message').eql('Appartment successfully deleted!');
				  	res.body.result.should.have.property('ok').eql(1);
				  	res.body.result.should.have.property('n').eql(1);
			      done();
			    });
		  });
	  });
  });
});