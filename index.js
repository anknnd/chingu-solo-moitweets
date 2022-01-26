require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios').default;

const app = express();
//app.use(cors());

app.get('/api/moitweets/:username', async (req, res) => {
    const username = req.params.username;
    console.log(username)
    const userInfo = await axios
        .get(`https://api.twitter.com/2/users/by/username/${username}`, {
            headers: { 'Authorization': `Bearer ${process.env.APP_KEY}` }
        })
        .then((rec) => rec.data.data);
    if (userInfo?.id) {
        axios
            .get(`https://api.twitter.com/2/users/${userInfo.id}/tweets?tweet.fields=created_at&expansions=author_id&user.fields=created_at`, {
                headers: { 'Authorization': `Bearer ${process.env.APP_KEY}` }
            })
            .then((rec) => res.json({
                payload: rec.data.data,
                error: null
            }))
            .catch((error) => res.status(500).json({
                payload: null,
                error: error.message
            }));
    }
    else{
        res.status(404).json({
            payload: null,
            error: `${username} not found`
        })
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});