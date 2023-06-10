import express from "express";
const router = express.Router();

// router.all("/", (req, res) => {
//   //this routers takes all methods
//   console.log("first");
// });

let fakeDb = [
  {
    task: "coding",
    hr: 33,
    id: 1234,
    type: "entry",
  },
  {
    task: "coding",
    hr: 33,
    id: 123455,
    type: "fffff",
  },
];

router.get("/", (req, res) => {
  res.json({
    status: "sus",
    message: "From patch method",
    fakeDb,
  });
});

router.post("/", (req, res) => {
  fakeDb.push(req.body);

  res.json({
    status: "succes",
    message: "From patch method",
  });
});

router.patch("/", (req, res) => {
  console.log(req.body);
  const { _id, type } = req.body;
  // update data in array
  // loop through the array and find matching id and update the type
  fakeDb.map((item) => {
    if (item.id === _id) {
      return { ...item, type };
    }
    return item;
  });
  res.json({
    status: "success",
    message: "THe mask has beeen switched",
  });
});

router.delete("/", (req, res) => {
  const { _id } = req.body;
  fakeDb = fakeDb.filter((item) => {
    if (item.id !== _id) {
      return { ...item, type };
    }
    return item;
  });

  res.json({
    status: "succes",
    message: "Task has been deleted successfully",
  });
});

export default router;
