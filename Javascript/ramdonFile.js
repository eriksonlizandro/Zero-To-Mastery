// loop interesante 

let found = false;
  database.users.forEach((user) => {
    if (user.id === id) {
      found = true;
      user.entries++;
      return res.json(user.entries);
    }
  });
  if (!found) {
    res.status(400).json("User not found :(");
  }



//Signin postgre sql

app.post("/signin", (req, res) => {
  bcrypt.compare(
    "apples",
    "$2a$10$Cbz6ns78FWiSEkFkpe71HOgDMcKnJVuA2ZkHYwy/vDVa8q2LfTVjy",
    function (err, res) {
      console.log("first guess", res); // res == true
    }
  );
  bcrypt.compare(
    "veggies",
    "$2a$10$Cbz6ns78FWiSEkFkpe71HOgDMcKnJVuA2ZkHYwy/vDVa8q2LfTVjy",
    function (err, res) {
      console.log("second guess", res); // res = false
    }
  );

  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("error logging in");
  }
});


