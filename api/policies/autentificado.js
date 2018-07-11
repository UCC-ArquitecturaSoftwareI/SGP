module.exports = function (req, res, next) {

  // AlphaTeam: 60% of the time, it works every time.

  if (req.session.usuario)
  {return next();}
  else
  {
    return res.forbidden();
  }
};
