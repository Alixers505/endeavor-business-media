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
      src: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
      srcset: [
        'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'linkedin', href: 'https://www.linkedin.com/showcase/4000114/', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/RDHmag', target: '_blank' },
    { provider: 'facebook', href: 'https://www.facebook.com/RDHMagazine', target: '_blank' },
  ],
  identityX: {
    appId: '5e69466987774f3141a7dcdb',
    enabled: true,
  },
  algolia: {
    applicationId: '80YJALCHBD',
    searchApiKey: 'ZWE3YmVlNWYyYmIzN2E5YWNlNTNiNDE2N2FlOGQyZDYyOTQ0OGU5MTQ3MWIyYmZlMjFhMTczNDVhMzMxNmRkN2ZpbHRlcnM9Tk9UJTIwdHlwZSUzQWNvbnRhY3QlMjBBTkQlMjBOT1QlMjB0eXBlJTNBcHJvbW90aW9u',
  },
  gtm: {
    containerId: 'GTM-5ZXPSXX',
  },
  wufoo: {
    userName: 'cygnuscorporate',
  },
  magazines: {
    description: 'RDH is published monthly for dental hygienists committed to ongoing professional growth. Reporting on topics such as hygiene practice management, evidence-based periodontics, infection control, oral pathology, new product evaluations and continuing education, RDH covers crucial issues that affect hygienists every day.',
  },
  contactUs: {
    branding: {
      bgColor: '#8956a7',
      logo: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
    },
    to: 'dental@endeavorb2b.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'zacharyk@pennwell.com',
    sendFrom: 'RDHMag.com <noreply@baseplatform.io>',
    sendBcc: 'eactivity@endeavorb2b.com',
    logo: 'https://img.rdhmag.com/files/base/pennwell/rdh/logo.png?h=60',
    bgColor: '#8956a7',
    isGdprEnabled: true,
    gdprMessage: "Yes, Endeavor Business Media may use my contact information consistent with Endeavor's Privacy Policy to communicate with me by email or telephone about other offerings by Endeavor, its brands, affiliates and/or third-party partners that may be of interest to businesses and individual participants in my industry.",
    privacyMessage: "By clicking above, I acknowledge and agree to Endeavor Business Media’s Terms of Service and to Endeavor Business Media's use of my contact information to communicate with me about offerings by Endeavor, its brands, affiliates and/or third-party partners, consistent with Endeavor's Privacy Policy. In addition, I understand that my personal information will be shared with any sponsor(s) of the resource, so they can contact me directly about their products or services. Please refer to the privacy policies of such sponsor(s) for more details on how your information will be used by them. You may unsubscribe at any time.",
  },
};
