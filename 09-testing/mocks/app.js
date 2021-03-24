function getIndexPage(req, res) {
    if (req.user.isLoggedIn()) {
        res.write("<h1>Hello</h1><p>Wlecome</p>");
    } else {
        res.write("Go way");
    }
    res.end();
}

module.exports = getIndexPage
