
class FunController {
    firstTest(req, res, next) {
        res.send('HELLLOOO NITSA!')
    }
}

module.exports = new FunController();