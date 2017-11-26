const COLORS = require('./colors')
const TYPOG = require('./typography')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.montserrat}, ${TYPOG.helveticaNeue}, ${TYPOG.sansSerif}`,

  // Colors
  colorTextPrimary: COLORS.platinum,
  colorTextHighlight: COLORS.carrotOrange,

  // Background
  bgPrimary: COLORS.darkGunMetal,
  bgSecondary: COLORS.gunMetal,

  // Header
  headerHeight: '45px',
  headerBgColor: COLORS.darkGunMetal
}
