const expect = require("expect");

const { Users } = require("./users");

describe("Users", () => {
  let users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: "1",
      name: "Tramaine",
      room: "Node Course"
    }, {
      id: "2",
      name: "Jane",
      room: "React Course"
    }, {
      id: "3",
      name: "John",
      room: "Node Course"
    }];
  });

  it("should add new user", () => {
    const users = new Users();
    const user = {
      id: "123",
      name: "Tramaine",
      room: "The Office Fans"
    };

    const newUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
    expect(newUser).toEqual(user);
  });

  it("should remove a user", () => {
    const userId = "1";
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it("should not remove user", () => {
    const userId = "99";
    const user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it("should find user", () => {
    const userId = "2";
    const user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it("should not find user", () => {
    const user = users.getUser("99");

    expect(user).toNotExist();
  });

  it("should return names for Node Course", () => {
    const userList = users.getUserList("Node Course");

    expect(userList).toEqual(["Tramaine", "John"]);
  });
  
  it("should return names for React Course", () => {
    const userList = users.getUserList("React Course");

    expect(userList).toEqual(["Jane"]);
  });
});