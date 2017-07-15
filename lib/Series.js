series = new Mongo.Collection("series");

// Functions

series.latest = function(serieID) {
    return series.findOne({id: serieID});
};




