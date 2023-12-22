// Living Area Schema
const LivingAreaSchema = new mongoose.Schema({
    type_living: {type: String, label: "Type of living room"},
    living_room_equipment: {type: String, label: "Living room equipment"},
    bed_type: {type: String, label: "Bed type"},
    bed_size: {type: String, label: "Bed size"},
    extra_info: {type: String, label: "Flooring and extra info"}
});

// Bedroom Schema
const BedroomSchema = new mongoose.Schema({
    bed_type: {type: String, label: "Bed type"},
    bed_size: {type: String, label: "Bed size"},
    extra_info: {type: String, label: "Flooring and extra info"}
});

// Kitchen Schema
const KitchenSchema = new mongoose.Schema({
    kitchen_type: {type: String, label: "Kitchen type"},
    equipment: {type: String, label: "Equipment"}
});

// Bathroom Schema
const BathroomSchema = new mongoose.Schema({
    bathroom: {type: String, label: "Bathroom"}
});

// Furniture Schema
const FurnitureSchema = new mongoose.Schema({
    furniture_age: {type: String, label: "Furniture age"},
    furniture_quality: {type: String, label: "Furniture quality"}
});

// Tenants Schema
const TenantsSchema = new mongoose.Schema({
    max_adult: {type: String, label: "max. number of adults"},
    max_child: {type: String, label: "max. number of children"},
    smoking: {type: Boolean, label: "Smoking"},
    pets: {type: Boolean, label: "Pets"}
});

// Contact Schema
const ContactSchema = new mongoose.Schema({
    title: {type: String, required: true, label: "Title"},
    first_name: {type: String, required: true, label: "First name"},
    last_name: {type: String, required: true, label: "Last name"},
    street_housenumber: {type: String, required: true, label: "Street / housenumber"},
    zip: {type: String, required: true, label: "ZIP"},
    city: {type: String, required: true, label: "City"},
    country: {type: String, required: true, label: "Country"},
    nationality: {type: String, label: "Nationality"},
    mobile_phone: {type: String, required: true, label: "Mobile phone"},
    email: {type: String, required: true, label: "Email"}
});

// Property Schema
const PropertySchema = new mongoose.Schema({
    roomNumber: {type: String, required: [true, 'Number of rooms is required'], label: 'Number of rooms'},
    size: {type: Number, required: [true, 'Size in square meters is required'], label: 'Size in square meters'},
    price: {type: String, required: [true, 'Rent in EURO /per month is required'], label: 'Rent in EURO /per month'},
    assistance: {type: Boolean, label: 'I would like assistance in determining the rental price'},
    minimum_rental: {type: String, label: 'Minimum rental period (in months)'},
    maximum_rental: {type: String, label: 'Maximum rental period (in months)'},
    starting_date: {type: Date, label: 'Starting'},
    ending_date: {type: Date, label: 'Ending'},
    housenumber: {type: String, required: [true, 'Street / housenumber is required'], label: 'Street / housenumber'},
    zip: {type: String, required: [true, 'ZIP is required'], label: 'ZIP'},
    city: {type: String, required: [true, 'City is required'], label: 'City'},
    floor: {type: String, label: 'Floor'},
    elevator: {type: Boolean, label: 'Elevator available'},
    living_area: LivingAreaSchema,
    bedrooms: [BedroomSchema],
    kitchen: KitchenSchema,
    bathroom: BathroomSchema,
    furniture: FurnitureSchema,
    tenants: TenantsSchema,
    contact: ContactSchema
});

// Compile model from schema
const Property = mongoose.model('Property', PropertySchema);

module.exports = {Property};
