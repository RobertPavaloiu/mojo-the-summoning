const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Card } = require('.')
const db = require('../db/config')

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  }) 
});


describe('card', () => {
  it('has a name', async () => {
    expect(card).toHaveProperty('name')
  }) 
});

describe('card', () => {
    it('has a mojo', async () => {
      expect(card).toHaveProperty('mojo')
    }) 
  });

  describe('card', () => {
    it('has stamina', async () => {
      expect(card).toHaveProperty('stamina')
    }) 
  });

  describe('card', () => {
    it('has an imgUrl', async () => {
      expect(card).toHaveProperty('imgUrl')
    }) 
  });