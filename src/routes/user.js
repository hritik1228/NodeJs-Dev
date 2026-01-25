const express = require("express");
const { userAuth } = require('../middlewares/auth');
const ConnectionRequest = require('../models/connectionRequest');

const userRouter = express.Router();

const USER_SAFE_DATA = "firstName lastName photoURL about age gender skills";


// Get all the pending connections request for the loggedIn user

userRouter.get("/user/requests/received",
    userAuth,
    async (req, res) => {

        try {
            const loggedInUser = req.user;
            const connectionRequests = await ConnectionRequest.find({
                toUserId: loggedInUser._id,
                status: "interested"
            }).populate("fromUserId", ["firstName", "lastName", "photoUrl", "age", "gender", "about", "skills"]);

            res.json({
                message: "Data fetched successfully", data: connectionRequests,
            })
        }
        catch (error) {
            res.status(400).send("ERROR:" + error.message);
        }

    });


userRouter.get("/user/connections",
    userAuth, async (req, res) => {

        try {
            const loggedInUser = req.user;
            const connectionRequests = await ConnectionRequest.find({
                $or: [
                    { fromUserId: loggedInUser._id, status: "accepted" },
                    { toUserId: loggedInUser._id, status: "accepted" }
                ],
            }).populate("fromUserId toUserId", USER_SAFE_DATA);

            const data = connectionRequests.map((row) => {
                if (row.fromUserId._id.toString() == loggedInUser._id.toString()) {
                    return row.toUserId;
                }
                return row.fromUserId;
            });

            res.status(200).json({
                data,
            });

        }
        catch (error) {
            res.status(400).send("ERROR:" + error.message);
        }

    })

module.exports = userRouter;
