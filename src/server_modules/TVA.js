const TVA = {
  DE: '20',
  UK: '21',
  FR: '20',
  IT: '25',
  ES: '19',
  PL: '21',
  RO: '20',
  NL: '20',
  BE: '19',
  EL: '23',
  CZ: '27',
  PT: '23',
  HU: '27',
  SE: '23',
  AT: '22',
  BG: '21',
  DK: '21',
  FI: '17',
  SK: '18',
  IE: '21',
  HR: '23',
  LT: '23',
  SI: '24',
  LV: '20',
  EE: '22',
  CY: '21',
  LU: '25',
  MT: '20'
}

const verifyTVA = function (country) {
  if (TVA.hasOwnProperty(country)) {
    return TVA[country]
  } else {
    return -1
  }
}

module.exports = {
  TVA,
  verifyTVA
}
