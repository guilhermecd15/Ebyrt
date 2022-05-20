const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('../index');

// const { Response } = require('superagent');
const Task = require('../models/tasks');

chai.use(chaiHttp);

const { expect } = chai;

describe('Seu teste', () => {
  let chaiHttpResponse;

  it('Sucesso', async () => {
    chaiHttpResponse = await chai.request(app).post('/').send({ descricao: "teste", status: "Pronto" })

    expect(chaiHttpResponse.status).to.be.equal(201)
    expect(chaiHttpResponse.body).to.be.keys('id', 'descricao', 'status', 'createdAt', 'updatedAt');
  });
});
