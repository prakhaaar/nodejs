const fsfile = require("fs");

const data = fsfile.readFile("contact.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file content :", data);
  }
});

const data1 = fsfile.writeFile("dummy.txt", "hello world", (err) => {
  if (err) throw err;
  console.log("file created");
});

module.exports = {
  data,
  data1,
};
