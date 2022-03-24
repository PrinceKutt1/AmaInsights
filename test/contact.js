const mongoose = require("mongoose");
const Contact = require('../models/contact');
process.env.NODE_ENV = 'MONGO_URI';
//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index');
let should = chai.should();


chai.use(chaiHttp);

//parent block
describe('Contacts', () => {
	beforeEach((done) => { //Before each test we empty the database
		Contact.remove({}, (err) => { 
		   done();		   
		});		
	})

/*
  * Test the /GET route
  */
describe('/GET contacts', () => {
    it('it should GET all the contacts', (done) => {
          chai.request(index)
          .get('/api/v1/contact')
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
describe('/POST contact', () => {
    it('it should not POST a contact without  description', (done) => {
        let contact = {
            email: "prince@gmail.com"
        }
          chai.request(index)
          .post('/api/v1/contact')
          .send(contact)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('description');
                res.body.errors.description.should.have.property('kind').eql('required');
            done();
          });
    });
    it('it should POST a contact ', (done) => {
        let contact = {
          email: "prince@gmail.com"

        }
          chai.request(index)
          .post('/api/v1/contact')
          .send(contact)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Contact successfully added!');
                res.body.contact.should.have.property('email');
            done();
          });
    });


/*
  * Test the /GET/:id route
  
*/
describe('/GET/:id contact', () => {
    it('it should GET a contact by the given id', (done) => {
        let contact = new Contact({ email: "prince@gmail.com"
          });
        contact.save((err, contact) => {
            chai.request(index)
          .get('/api/v1/contact/' + contact.id)
          .send(contact)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('email');
                res.body.should.have.property('_id').eql(contact.id);
            done();
          });
        });
          
    });
});
/*
* Test the /PUT/:id route
*/

describe('/PUT/:id contact', () => {
    it('it should UPDATE a contact given the id', (done) => {
        let contact = new Contact({email: "prince@gmail.com"})
        contact.save((err, contact) => {
              chai.request(index)
              .put('/api/v1/contact/' + contact.id)
              .send({email: "prince@gmail.com"})
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Contact  updated!');
                done();
              });
        });
    });
});
/*
* Test the /DELETE/:id route
*/

describe('/DELETE/:id contact', () => {
    it('it should DELETE a contact given the id', (done) => {
        let contact = new Contact({email: "prince@gmail.com"})
        contact.save((err, contact) => {
              chai.request(index)
              .delete('/api/v1/contact/' + contact.id)
              .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Contact successfully deleted!');
                    res.body.result.should.have.property('ok').eql(1);
                    res.body.result.should.have.property('n').eql(1);
                done();
              });
        });
    });
});

});
});