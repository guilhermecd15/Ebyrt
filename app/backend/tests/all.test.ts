const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index');

const Task = require('../models/tasks');

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  let chaiHttpResponse;

  it('Post', async () => {
    chaiHttpResponse = await chai.request(app).post('/').send({ descricao: "teste", status: "Pronto" })

    expect(chaiHttpResponse.status).to.be.equal(201)
    expect(chaiHttpResponse.body).to.be.keys('id', 'descricao', 'status', 'createdAt', 'updatedAt');
  });

  it('Get', async () => {
    chaiHttpResponse = await chai.request(app).get('/')

    expect(chaiHttpResponse.status).to.be.equal(200)
    expect(chaiHttpResponse.body[0]).to.be.keys('id', 'descricao', 'status', 'createdAt', 'updatedAt');
  });
});
