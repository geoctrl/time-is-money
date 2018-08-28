
const usd = (money = 0) => {
  return money.toFixed(2);
}

const faceTypes = [
  'happy',
  'happy-wink',
  'elated',
  'laugh-small',
  'pleased',
  'excited-wink',
  'laugh-big',
  'smile-fake',
  'chill',
  'whatever',
  'confused',
  'surprised-sad',
  'surprised',
  'angry',
  'sad',
  'unhappy',
];

function getRandomFaceTypesGenerator(subset = faceTypes) {
  return function() {
    return subset[Math.floor(Math.random() * subset.length)];
  }
}

export { usd, faceTypes, getRandomFaceTypesGenerator };