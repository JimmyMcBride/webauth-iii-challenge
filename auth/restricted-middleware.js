const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization

  if (token) {
    jwt.verify(token, 'cookiesareyumyummewantcookies', (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'wut da heck? 💩' })
      } else {
        req.decodedJwt = decodedToken
        next()
      }
    })
  } else {
    res.status(401).json({ message: 'no 💩 for you' })
  }
}