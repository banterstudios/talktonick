const COLORS = require('./colors')
const TYPOG = require('./typography')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.montserrat}, ${TYPOG.helveticaNeue}, ${TYPOG.sansSerif}`,

  // Colors
  colorTextPrimary: COLORS.platinum,

  // Background
  bgPrimary: COLORS.onyx,
  bgSecondary: COLORS.jet,
  bgTertiary: COLORS.raisinBlack,

  // Header
  headerHeight: '45px',
  headerBgColor: COLORS.jet
}
