const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
	res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
	next();
});

router.get("/ip", (req, res) => {
	let clientIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

	// If x-forwarded-for is a list (proxy), get the first IP
	if (typeof clientIp === "string") {
		clientIp = clientIp.split(",")[0].trim();
	}

	if (!clientIp) {
		clientIp = req.ip;
	}

	res.json({ ip: clientIp });
});

module.exports = router;
