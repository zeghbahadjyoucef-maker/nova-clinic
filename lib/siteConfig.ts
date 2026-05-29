export const siteConfig = {
  name: 'Cabinet Dentaire NOVA',
  doctor: 'Dr Boulounis',
  phones: [
    { label: '0658 02 90 33', raw: '0658029033', whatsapp: '213658029033', hasWhatsapp: false },
    { label: '0561 17 98 58', raw: '0561179858', whatsapp: '213561179858', hasWhatsapp: true }
  ],
  address: 'BT 03, N01, Réghaïa 16036, Alger',
  email: '',
  social: {
    facebook: '',
    instagram: ''
  },
  maps: {
    short: 'https://maps.app.goo.gl/kzj1UEgLwKwGn5Vi8',
    lat: 36.7413739,
    lng: 3.3472845,
    embed:
      'https://maps.google.com/maps?q=36.7413739,3.3472845&hl=fr&z=17&output=embed'
  },
  hours: {
    weekdays: '09:00 – 18:00',
    friday: 'Fermé'
  },
  rating: {
    score: 5.0,
    count: 5
  }
} as const;

export type Phone = (typeof siteConfig.phones)[number];
