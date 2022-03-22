const {
  getTweet,
  createTweet,
  deleteTweet,
} = require("../queries/tweets.queries");

exports.tweetList = async (req, res, next) => {
  try {
    const tweets = await getTweet();
    res.render("tweets/tweet", { tweets });
  } catch (err) {
    next(err);
  }
};
exports.tweetNew = (req, res, next) => {
  res.render("tweets/tweet-form");
};
exports.tweetCreate = async (req, res, next) => {
  try {
    const body = req.body;
    await createTweet(body);
    res.redirect("/tweets");
  } catch (err) {
    const errors = Object.keys(err.errors).map(
      (key) => err.errors[key].message
    );
    res.status(400).render("tweets/tweet-form", { errors });
  }
};
exports.tweetDelete = async (req, res, next) => {
  try {
    const tweetId = req.params.tweetId;
    await deleteTweet(tweetId);
    const tweets = await getTweet();
    res.render("tweets/tweet-list", { tweets });
  } catch (err) {
    next(err);
  }
};
