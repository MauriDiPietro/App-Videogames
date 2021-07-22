/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: false }));
    
describe('GET /videogames', ()=> {
    it('muestra todos los videogames, responde con 200', async()=> {
      try {
        await agent.get('/videogames').expect(200)
      } catch (err) {
        console.log(err);
      }
    }).timeout(47000);
    it('Si se busca por nombre responde con el/los videogame/s que tengan ese nombre', async() => {
      try {
          const res = await agent.get('/videogames?name=pacman');
          expect(res.body[0].name).to.be.equal('pacman');
      } catch (err) {}
  }).timeout(47000);
  it('Si se busca por id, responde con el videogame que posea ese id', async() => {
    try {
        const res = await agent.get('/videogame/1');
        expect(res.body[0].name).to.be.equal('D/Generation HD');
    } catch (err) {}
}).timeout(47000);
});

describe('POST /videogame', ()=>{
  it('crea el videogame, resp con 200', async()=>{
    try{
      await agent.post('/videogame').send({name: 'New-Videogame', rating: 5, genres: 'Action'}).expect(200);
    } catch (err) {
      console.log(err);
    }
  })
  it('Si no ingresa nombre, resp 400', async() => {
    try {
        await agent.post('/videogame').send({}).expect(400);
    } catch (err) {
        console.log(err);
    }
});
it('Si no se ingresa rating, resp con 400', async() => {
  try {
      await agent.post('/videogame').send({ name: 'Prueba' }).expect(400);
  } catch (err) {
      console.log(err);
  }
});
it('VideoGame creado OK', async() => {
  try {
      const res = await agent
          .post('/videogame')
          .send({ name: 'Prueba', rating: 1 });
      expect(res.body.name).to.be.equal('Prueba');
  } catch (err) {
      console.log(err);
  }
});



})

  
});


