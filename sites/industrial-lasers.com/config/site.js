const navigation = require('./navigation');
const gam = require('./gam');

const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');

module.exports = {
  navigation,
  gam,
  nativeX,
  dragonForms,
  company: 'Endeavor Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
      srcset: [
        'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
      srcset: [
        'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/industrial-laser-solutions', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/ILS_for_Mfg', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/industriallasersolutions', target: '_blank' },
  ],
  identityX: {
    appId: '5e6947e587774f2573a7dcea',
    enabled: true,
    comments: { enabled: true },
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-K9WQRTW',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'Lasers for Manufacturing Industrial Laser Solutions has one focus, industrial laser materials processing. We are devoted exclusively to global coverage of industrial laser applications, technology, and the people and companies who participate in this, the largest commercial portion of the global laser market. Our uniquely qualified international editorial staff has accumulated experience in this technology field exceeding 100 years.',
  },
  contactUs: {
    branding: {
      bgColor: '#106d7d',
      logo: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
    },
    to: 'juliac@pennwell.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'bgweb@endeavorb2b.com',
    sendFrom: 'IndustrialLasers.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.industrial-lasers.com/files/base/pennwell/ils/logo.png?h=60',
    bgColor: '#106d7d',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
