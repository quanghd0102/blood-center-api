'use strict';

const rp = require('request-promise-native');

const ONESIGNAL_API_KEY = process.env.ONESIGNAL_API_KEY || '';
const ONESIGNAL_ID = process.env.ONESIGNAL_ID || '';

async function sendNotificationByPlayerId({ userIds, contents, data }) {
  const options = {
    method: 'POST',
    uri: 'https://onesignal.com//api/v1/notifications',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Basic ${ONESIGNAL_API_KEY}`
    },
    body: {
      app_id: ONESIGNAL_ID,
      contents,
      data,
      include_player_ids: userIds,
      ios_badgeType: 'Increase',
      ios_badgeCount: 1
    },
    json: true
  };
  try {
    return await rp(options);
  } catch (err) {
    throw err;
  }
}

module.exports = {
  sendNotificationByPlayerId
};
