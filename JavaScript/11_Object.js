let mysym = Symbol("key"); // Creating a symbol

const info = {
  name: "Priyesh",
  full_name: "Priyesh Singh",
  age: 32,
  [mysym]: "2key",
  email: "priyeshwas11@gmail.com",
  isStudent: true,
  subjects: ["JavaScript", "Python", "Java"],
};

info.name = "Priyesh Was"; // Updating properties 
info["age"] = 33; // Updating properties
// info.fullname = "Priyesh Was"; // This will not work as 'fullname' is not defined in the object
info["fullname"] = "Priyesh Singh"; // Correct way to add a new property
// console.log(info.name); // Priyesh Was
// console.log(info["age"]); // 33

// console.log(info[mysym]); // 2key

// console.log(info);

