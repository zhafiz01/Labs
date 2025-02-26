import VirtualPet from '../src/index';

describe('VirtualPet', () => {
  let pet: VirtualPet;

  beforeEach(() => {
    pet = new VirtualPet('Bob');
  });

  test('should initialize properties correctly', () => {
    expect(pet.name).toBe('Bob');
    expect(pet.hunger).toBe(50);
    expect(pet.happiness).toBe(50);
  });

  test('describe() method should return correct string', () => {
    expect(pet.describe()).toBe('Name: Bob, Hunger: 50, Happiness: 50');
    pet.hunger = 60;
    pet.happiness = 70;
    expect(pet.describe()).toBe('Name: Bob, Hunger: 60, Happiness: 70');
  });

  test('getSatisfaction() method should return correct value', () => {
    expect(pet.getSatisfaction()).toBe(0); 
    pet.happiness = 70;
    pet.hunger = 50;
    expect(pet.getSatisfaction()).toBe(20); 
  });

  test('makeSound() method should return correct sound', () => {
    expect(pet.makeSound('woof')).toBe('Bob says woof');
    expect(pet.makeSound('meow')).toBe('Bob says meow');
  });

  test('feed() method should decrease hunger but not below 0', () => {
    pet.feed();
    expect(pet.hunger).toBe(40);
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    expect(pet.hunger).toBe(0); 
  });

  test('play() method should increase happiness but not above 100', () => {
    pet.play();
    expect(pet.happiness).toBe(60);
    pet.play();
    pet.play();
    pet.play();
    pet.play();
    pet.play();
    pet.play();
    pet.play();
    expect(pet.happiness).toBe(100); 
  });
});
