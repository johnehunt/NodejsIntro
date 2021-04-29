function getIndexPage(req, res) {
    if (req.user.isLoggedIn()) {
        res.write("<h1>Hello</h1><p>Welcome</p>");
    } else {
        res.write("Go way");
    }
    res.end();
}

module.exports = getIndexPage
