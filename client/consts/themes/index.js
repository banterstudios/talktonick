const COLORS = require('./colors')
const TYPOG = require('./typography')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.raleway}, ${TYPOG.sansSerif}`,
  fontSecondary: `${TYPOG.openSans}, ${TYPOG.helvetica}`,

  // Colors
  colorTextPrimary: COLORS.platinum,
  colorTextHighlight: COLORS.carrotOrange,
  colorTextBody: COLORS.darkLiver,

  // Background
  bgPrimary: COLORS.darkGunMetal,
  bgSecondary: COLORS.gunMetal,

  // Header
  headerHeight: '45px',
  headerBgColor: COLORS.darkGunMetal
}
