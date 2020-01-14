export default function isYes(str) {
    const myString = str.toLowerCase();
    if (myString === 'yes' || myString === 'y' || myString === 'ya' || myString === 'yea') return true;
    else return false;
}

