const router = require("express").Router();
const Movie = require("../models/Movie.model");

router.get("/movies", async (req, res) => {
    const moviesDB = await Movie.find();
    res.render("movies/movies-list", {movies: moviesDB});
});

router.get("/movies/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.render("movies/movies-details", movie);
})

module.exports = router;
