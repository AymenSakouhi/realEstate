import { Newsletter } from "../models/newsletter.js";

const getNewsLetter = (req, res) => {
  Newsletter.find()
    .sort({ createDeflate: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((e) => res.status(404).json({ error: e }));
};

const postNewsLetter = (req, res) => {
  const { email } = req.body;
  const newEmail = new Newsletter({ email });
  newEmail
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((e) => res.status(404).json({ error: e }));
};

export { getNewsLetter, postNewsLetter };
