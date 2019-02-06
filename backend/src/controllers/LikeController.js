const Tweet = require('../models/Tweet');


module.exports = {
    // CRIAR
    async store(req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({
            likes: tweet.likes + 1
        });

        await tweet.save();

        // WEBSOCKET ESPALHANDO O TWEET 
        // PRA TODO MUNDO ESCUTAR
        req.io.emit('like', tweet);

        return res.json(tweet);
    }
};