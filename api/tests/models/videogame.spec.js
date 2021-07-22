const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    beforeEach(() => Videogame.sync({ force: false }));
  describe('Validators', () => {
    describe('name', () => {
      it('Deberia arrojar un error si el nombre es null', async() => {
          try {
              await Videogame.create({});
          } catch (err) {
              expect(err.message).to.equal(
                  'notNull Violation: videogame.name cannot be null'
              );
          }
      });
  });
  
describe('Crear un nuevo Game', () => {
  describe('Nuevo Videogame', () => {
      it('Videogame creado OK', async() => {
          await Videogame.create({ name: 'New-Game', rating: 5, description: 'New videogame', released: 26-05-2020, platforms: ['PC'], rating: 5 });
          const videogame = await Videogame.findOne({
              where: {
                  name: 'New-Game',
              },
          });
          expect(videogame.name).to.equal('New-Game');
          expect(videogame.rating).to.equal(5);
      });
  });
});    
});

});
