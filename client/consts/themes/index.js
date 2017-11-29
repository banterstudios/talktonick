const COLORS = require('./colors')
const TYPOG = require('./typography')
const BREAKPOINTS = require('./breakpoints')

module.exports = {
  // Fonts
  fontPrimary: `${TYPOG.raleway}, ${TYPOG.sansSerif}`,
  fontSecondary: `${TYPOG.openSans}, ${TYPOG.helvetica}`,

  // Text Colors
  colorTextPrimary: COLORS.platinum,
  colorTextHighlight: COLORS.carrotOrange,
  colorTextBody: COLORS.wenge,

  // CTA
  ctaPrimary: COLORS.wenge,
  ctaHighlight: COLORS.carrotOrange,

  // Background
  bgPrimary: COLORS.darkGunMetal,
  bgSecondary: COLORS.gunMetal,

  // Header
  headerHeight: '60px',
  headerBgColor: COLORS.darkGunMetal,

  // font size
  fontSizeTitle: '45px',
  fontSizeMdTitle: '28px',
  fontSizeSmTitle: '24px',
  fontSizeSubTitle: '20px',
  fontSizeMdSubTitle: '18px',
  fontSizeSmSubTitle: '16px',
  fontSizeText: '14px',
  fontSizeMdText: '12px',
  fontSizeSmText: '10px',

  // Breakpoints
  ...BREAKPOINTS
}
