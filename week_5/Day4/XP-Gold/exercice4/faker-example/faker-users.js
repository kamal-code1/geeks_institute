const { faker } = require('@faker-js/faker');
let users = [];

function addFakeUser() {
  const user = {
    name: faker.name.fullName(),
    address: faker.address.streetAddress(),
    country: faker.address.country()
  };
  users.push(user);
  console.log(user);
}

module.exports = { users, addFakeUser };
