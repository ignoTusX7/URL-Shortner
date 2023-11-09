const URL = require("../models/url");

const getUrl = async (req, res) => {
  const shortId = req.params.shortId;

  const redirectTo = await URL.findOneAndUpdate(
    {
      shortId: shortId,
    },
    {
      $push: {
        visitHistory: { timeStamp: Date.now() },
      },
    }
  );
  let toUrl = redirectTo.redirectUrl;
  if (!redirectTo.redirectUrl.startsWith("http")) {
    toUrl = "http://" + toUrl;
  }

  res.redirect(toUrl);
};

const createUrl = async (req, res) => {
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "url is required" });

  const shortID = Date.now();
  const cretaedURL = await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
  });

  res.json({ shortId: shortID });
};

module.exports = { createUrl, getUrl };
