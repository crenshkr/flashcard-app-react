
export function pickRandomEntry(providedArray) {
    const numberOfEntries = providedArray.length;
    const randomEntry = Math.floor(Math.random() * numberOfEntries);
    return providedArray[randomEntry];
  }


  