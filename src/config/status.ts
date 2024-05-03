import {
  ActivitiesOptions,
  ActivityType,
  PresenceData,
  PresenceUpdateStatus,
} from "discord.js";

const activityStatus: ActivitiesOptions = {
  name: "Follow @MwikeOW on Twitter",
  type: ActivityType.Custom,
};

const onlineStatus = PresenceUpdateStatus.DoNotDisturb;

const presenceStatus: PresenceData = {
  activities: [activityStatus],
  status: onlineStatus,
};

export default presenceStatus;
