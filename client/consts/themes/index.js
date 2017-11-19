const COLORS = require('./colors')
const TYPOG = require('./typography')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.montserrat}, ${TYPOG.helveticaNeue}, ${TYPOG.sansSerif}`,

  // Colors
  colorTextPrimary: COLORS.white,

  // Background
  bgPrimary: COLORS.arsenic,
  bgSecondary: COLORS.teaRose,

  // Header
  headerHeight: '45px'
}
