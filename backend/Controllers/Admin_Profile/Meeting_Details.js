const {
    Meeting_Model,
} = require("../../DatabaseSetup/Mongoose.Meetings.Schemas");
const Meeting_Details = async (req, res) => {
    try {
        const groupName = req.params.groupName;
        const completedMeetings = await Meeting_Model.find({
            $and: [
                {
                    GroupName: groupName,
                },
                {
                    MeetingStatus: "Completed",
                },
            ],
        });
        const pendingMeetings = await Meeting_Model.find({
            $and: [
                {
                    GroupName: groupName,
                },
                {
                    MeetingStatus: "Pending",
                },
            ],
        });
        res.status(200).json({
            completed: completedMeetings,
            pendingMeetings: pendingMeetings
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
module.exports = {
    Meeting_Details
}