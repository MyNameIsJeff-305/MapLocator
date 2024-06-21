const express = require('express');
const { Spot, SpotMedia } = require('../../db/models');
const { preview } = require('vite');

const router = express.Router();

//Middlewares

//Routes
router.get('/', async (req, res, next) => {
    try {
        const spots = await Spot.findAll();

        let Spots = [];

        for (const spot of spots) {
            spot.lat = parseFloat(spot.lat);
            spot.lng = parseFloat(spot.lng);
            spot.price = parseFloat(spot.price);
            const values = spot.toJSON();
            Spots.push(values);
        }

        const previewMedia = await SpotMedia.findAll();

        let previews = {};

        for (const pM of previewMedia) {
            let media = pM.toJSON();
            if (!previews[media.spotId]) {
                previews[media.spotId] = media.url;
            }
        }

        for (const spot of Spots) {
            spot.previewMedia = previews[spot.id];
        }

        res.json({ Spots });

    } catch (error) {
        next(error)
    }
})

module.exports = router;
