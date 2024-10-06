// Simulated database of users
const users = [
    { id: 1, username: "user123", password: "Passw0rd!" },
    { id: 2, username: "tech_guru", password: "MySecret123!" },
];

// Simulated vulnerable login function
function vulnerableLogin(username, password) {
    // Vulnerable to SQL injection
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}';`;
    
    console.log("Executing query: ", query);
    
    // Simulated query execution
    const user = users.find(user => user.username === username && user.password === password);
    
    if (user) {
        console.log("Login successful!");
    } else {
        console.log("Invalid username or password.");
    }
}

// Example usage with a potential SQL injection attack
vulnerableLogin("user123", "Passw0rd!"); // Should log: Login successful!
vulnerableLogin("user123", "' OR '1'='1"); // Simulated injection



// staticCode.js
//function greet(name) {
 //   return `Hello my name is, ${name}!`;
//}

//console.log(greet("Brooke Castleberry"));

