const Peer = [];

let Note = "Ad space. Drop a note here 👉🏻";

export function getNote() {
  return Note;
}

export function setNote(note) {
  try {
    return new Promise((resolve, reject) => {
      Note = note;
      resolve();
    });
  } catch (error) {
    console.log(error);
  }
}

export async function fetchPeer(data) {
  try {
    return new Promise(async (resolve, reject) => {
      if (Peer.length < 1) {
        const { teleId, userId } = data;
        const doc = {
          teleId,
          userId,
        };
        Peer.push(doc);
        reject("No match");
        return;
      }

      const index = Peer.findIndex((user) => !(user.teleId in data.flags));

      let peer = null;
      if (index !== -1) {
        [peer] = Peer.splice(index, 1);
        resolve(peer);
        return;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

export async function removePeer(data) {
  try {
    return new Promise(async (resolve, reject) => {
      const index = Peer.findIndex((item) => item === data.userId);

      if (index !== -1) {
        Peer.splice(index, 1);
      }

      resolve();
    });
  } catch (error) {
    console.log(error);
  }
}
