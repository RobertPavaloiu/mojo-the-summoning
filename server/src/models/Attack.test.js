const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Attack } = require('.')
const db = require('../db/config')

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  }) 
});


describe('attack', () => {
  it('has a title', async () => {
    expect(attack).toHaveProperty('title')
  }) 
});

describe('attack', () => {
    it('has a mojoCost', async () => {
      expect(attack).toHaveProperty('mojoCost')
    }) 
  });

  describe('attack', () => {
    it('has staminaCost', async () => {
      expect(attack).toHaveProperty('staminaCost')
    }) 
  });
