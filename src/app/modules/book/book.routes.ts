import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  console.log(req);
});

router.post("/", (req, res) => {
  console.log(req);
});
router.patch("/", (req, res) => {
  console.log(req);
});

export const bookRouter = router;
