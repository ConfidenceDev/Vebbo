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
        const { userId } = data;
        Peer.push(userId);
        reject("No match");
        return;
      }

      if (Peer[0] !== data.userId) {
        const top = Peer[0];
        Peer.shift();
        resolve(top);
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
