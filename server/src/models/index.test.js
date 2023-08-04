const { User, Deck, Card, Attack } = require('./index'); 
const { sequelize } = require('sequelize');
const sequelizeMock = require('sequelize-mock');

const DBMock = new sequelizeMock();


const UserMock = DBMock.define('User', {
  id: 1,
  userName: 'testuser',
});

const DeckMock = DBMock.define('Deck', {
  id: 1,
  name: 'Test Deck',
  xp: 100,
});

const CardMock = DBMock.define('Card', {
  id: 1,
  name: 'Test Card',
  mojo: 50,
  stamina: 30,
  imgUrl: 'testimage.jpg',
});

const AttackMock = DBMock.define('Attack', {
  id: 1,
  title: 'Test Attack',
  mojoCost: 10,
  staminaCost: 5,
});

// Set up associations
UserMock.hasOne(DeckMock);
DeckMock.belongsTo(UserMock);

CardMock.belongsTo(DeckMock);
DeckMock.hasMany(CardMock);

CardMock.belongsToMany(AttackMock, { through: 'card-attack' });
AttackMock.belongsToMany(CardMock, { through: 'card-attack' });

describe('Testing Associations', () => {
    it('User is associated to Deck', async () => {
      const user = await UserMock.create();
      const deck = await DeckMock.create({ UserId: user.id });
  
      const foundDeck = await deck.getUser();
      expect(foundDeck).toHaveProperty('id', user.id);
      expect(foundDeck).toHaveProperty('userName', user.userName);
    });
  
    it('Deck is associated with Card', async () => {
      const deck = await DeckMock.create();
      const card = await CardMock.create({ DeckId: deck.id });
  
      const foundDeck = await card.getDeck();
      expect(foundDeck).toHaveProperty('id', deck.id);
      expect(foundDeck).toHaveProperty('name', deck.name);
      expect(foundDeck).toHaveProperty('xp', deck.xp);
    });
  
    it('Card is associated with Attack', async () => {
        const card = await CardMock.create();
        const attack = await AttackMock.create();
    
        await card.addAttack(attack);
    
        const foundAttacks = await card.getAttacks();
        expect(foundAttacks.map(item => item.toJSON())).toEqual([attack.toJSON()]);
      });
    });
  