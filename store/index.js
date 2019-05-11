import VigotechFriends from '../static/friends';

var Config = require('../static/custom/config');
var CitytechStructure = require(`../static/members/${Config.city}/members-generated.json`);

export const state = () => ({
  membersStructure: {
    members: {}
  },
  friends: {},
  cookieStatus: false
});

export const mutations = {
  loadData(state, payload) {
    state.membersStructure = payload;
  },
  loadFriends (state, payload) {
    state.friends = payload
  },
  setCookieStatus(state, payload) {
    console.log("setCookieStatus method");
    state.cookieStatus = payload;
  }
};

export const actions = {
  loadData (store) {
    return store.commit('loadData', CitytechStructure)
  },
  loadFriends (store) {
    return store.commit('loadFriends', VigotechFriends)
  }
};

export const getters = {
  membersAndRoot(state) {
    const membersStructure = JSON.parse(JSON.stringify(state.membersStructure));

    const membersStructureFull = membersStructure.members;
    membersStructureFull['root'] = membersStructure;
    membersStructureFull['root'].members = null;

    return membersStructureFull;
  },
  nextEventGroup(state) {
    let groupsByNextEvent = getters.membersAndRoot(state);
    let groupNextEvent = {
      nextEvent: {
        date: 9999999999999
      }
    };

    for (let groupKey in groupsByNextEvent) {
      let group = groupsByNextEvent[groupKey];
      try {
        if (group.nextEvent === undefined || group.nextEvent.date === undefined) {
          continue
        }

        let date = group.nextEvent.date;

        if (date > new Date().getTime() && date < groupNextEvent.nextEvent.date) {
          groupNextEvent = group;
        }
      } catch (e) {
        console.log(e);
      }
    }

    if (groupNextEvent.nextEvent.date < 9999999999999) {
      return groupNextEvent;
    } else {
      return {};
    }
  },
  nextEvents(state, getters) {
    try {
      const nextEventGroup = getters.nextEventGroup;

      if (nextEventGroup === {}) {
        return {};
      } else {
        let groupsByNextEvent = getters.membersAndRoot;
        let groupNextEvents = [];

        for (let groupKey in groupsByNextEvent) {
          let group = groupsByNextEvent[groupKey];
          try {
            if (group.nextEvent === undefined || group.nextEvent.date === undefined) {
              continue;
            }

            const date = new Date(group.nextEvent.date);
            const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

            const now = new Date(nextEventGroup.nextEvent.date);
            const nowString = `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;

            if (dateString === nowString) {
              groupNextEvents.push(group);
            }
          } catch (e) {
            console.log(e);
          }
        }
        return groupNextEvents;
      }
    } catch (e) {}
  },
  recentVideos(state) {
    const videos = {};

    for (let groupKey in state.membersStructure.members) {
      let group = state.membersStructure.members[groupKey];

      for (let videoKey in group.videolist) {
        let video = group.videolist[videoKey];
        videos[video.pubDate] = video;
      }
    }

    //Sort by pubdate
    const videosSortedByDate = {};
    Object.keys(videos)
      .sort()
      .reverse()
      .forEach(function(key) {
        videosSortedByDate[key] = videos[key];
      });

    //Return only 4 videos
    const result = Object.keys(videosSortedByDate).map(function(key) {
      return videosSortedByDate[key];
    });

    return result.splice(0, 4);
  }
};
