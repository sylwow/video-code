function processNormalUser(username, email, restricted) {
  /* do sth */
}
function processAdminUser(username, email) {
  /* do sth */
}

const userAccountData = {
  name: "mike",
  email: "mike@mike.com",
  age: 25,
  isAdmin: false,
};

function processUser(
  { name: username, email, isAdmin, age, banned = false }) {
  if (isAdmin) {
    processAdminUser(username, email);
  } else {
    const restricted = age < 18;
    processNormalUser(username, email, restricted);
  }
}

processUser(userAccountData);
