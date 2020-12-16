const navigation = require('./navigation');
const leaders = require('./leaders');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  leaders,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
      srcset: [
        'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
      srcset: [
        'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/5113743/', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/SecInfoWatch', target: '_blank' },
    { provider: 'facebook', href: 'http://www.facebook.com/SecInfoWatch', target: '_blank' },
  ],
  identityX: {
    appId: '5e28a5f258e67bcde455ae58',
    enabled: true,
    comments: { enabled: true },
  },
  radix: {
    enabled: true,
    appId: '378a77a4-aac4-492d-a625-a608d958e587',
    submissionFieldIds: [
      { name: 'comments', id: '5be350daadff35d154799025' },
    ],
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-KMZ7FHS',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#164f77',
      logo: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
    },
    to: 'nbrokamp@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'nbrokamp@endeavorb2b.com',
    sendFrom: 'SecurityInfoWatch.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.securityinfowatch.com/files/base/cygnus/siw/image/static/logo/site_logo_red_on_black.png?h=60',
    bgColor: '#164f77',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
