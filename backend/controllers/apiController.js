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

const searchProperties = async (req, res) => {
    try {
        // Extract query parameters
        const { starting_date, ending_date, minimum_rental, maximum_rental } = req.query;

        // Construct the query
        const query = {
            'starting_date': { $gte: new Date(starting_date) },
            'ending_date': { $lte: new Date(ending_date) },
            'minimum_rental': { $lte: minimum_rental },
            'maximum_rental': { $gte: maximum_rental }
        };

        // Execute the query
        const properties = await Property.find(query);

        // Send the response
        res.status(200).json(properties);
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: error.message });
    }
};

const createProperty = async (req, res) => {
    try {
        const newProperty = new Property(req.body);
        await newProperty.save();
        res.status(201).send(newProperty);
    } catch (error) {
        res.status(400).send(error);
    }
};

export { getNewsLetter, postNewsLetter,searchProperties,createProperty };
