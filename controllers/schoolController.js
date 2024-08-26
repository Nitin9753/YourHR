const School = require('../entity/School');
const haversine = require('haversine-distance');

exports.addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || latitude === undefined || longitude === undefined) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const school = { name, address, latitude, longitude };
    School.addSchool(school, (err) => {
        console.log(err);
        if (err) return res.status(500).json({ error: 'Failed to add school' });
        res.status(201).json({ message: 'School added successfully' });
    });
};

exports.listSchools = (req, res) => {
    const userLat = parseFloat(req.body.latitude);
    const userLong = parseFloat(req.body.longitude);

    if (isNaN(userLat) || isNaN(userLong)) {
        return res.status(400).json({ error: 'Invalid latitude or longitude' });
    }

    School.getAllSchools((err, results) => {
        if (err) return res.status(500).json({ error: 'Failed to fetch schools' });

        const schools = results.map((school) => ({
            ...school,
            distance: haversine(
                { lat: userLat, lon: userLong },
                { lat: school.latitude, lon: school.longitude }
            )
        })).sort((a, b) => a.distance - b.distance);

        res.json(schools);
    });
};
