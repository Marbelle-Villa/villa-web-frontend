import type { Experience, Suite } from '../types'

export const suites: Suite[] = [
  {
    id: 'ocean-whisper',
    name: 'The Ocean Whisper Master Suite',
    subtitle: 'Oceanfront • 2 guests',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCExIOY7C77YaYYBQpzZ_EWabkeqTWqmSKrP1L73Tiye7qUjO8GHawdxb3o_HnPLSUAx6eYIgHGp98apvT-MeY5svTgs6B882FQLJdCj0_ofZrHdpUMBn6Hq7MTc_Rru3lCwMEsdBk1dAfkyKYHrqCKKgqw4NB5KZDRQNBF9wOk2sr47_GyNkSWjfPxupWBtss5rUJsLBRREsrUdzLM8SDkv9KD2kmBdxutRidPtwEAQy0jJefPrRk04w',
    alt: 'The Ocean Whisper Master Suite interior',
    badge: 'OCEAN FRONT • 2 GUESTS',
    size: '68 m² (730 sq ft)',
    description:
      'Elevated upper-pavilion master sanctuary with expansive teak ocean verandah, hand-hammered copper soaking tub, and uninterrupted sunset views over the reef.',
    features: ['King Pavilion Bed', 'Copper Soaking Tub', 'Sunken Balcony'],
    priceUsd: 185,
    priceLkr: 55500,
  },
  {
    id: 'palm-garden',
    name: 'Palm Garden Verandah Suite',
    subtitle: 'Garden level • 2 guests',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAxUC4A_xS0Atbi_vZJpe7Plfvxat15jZJ0HMceR39_0myrF7PT9zfVOTuSE5VBmaGEixmlw8hj1GKgulUupPZlsGsR2iAtTz_3XkVtm9cb41nLbaCStFckCfic8sDjzPzgea_iF_ucItEbuZdm5KMgZdllG_Tv50hYMMRkY3snbJXyEA6-jv_sIaTvbADiTpHC_QKeY0pgxtFzKxLF6QDNNcQfZvcPFwUih1x-6W5rDTIb5vw2p7HCBw',
    alt: 'Palm Garden Verandah Suite with private plunge pool',
    badge: 'GARDEN LEVEL • 2 GUESTS',
    size: '55 m² (590 sq ft)',
    description:
      'Tucked into the fragrant courtyard garden featuring a private plunge pool, open-sky rainfall monsoon shower, and shaded reading cabana under centenary palms.',
    features: ['Private Plunge Pool', 'Monsoon Shower', 'Private Verandah'],
    priceUsd: 145,
    priceLkr: 43500,
  },
  {
    id: 'royal-coconut',
    name: 'The Royal Coconut Pool Villa',
    subtitle: '2-bedroom villa • 4 guests',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCmrPzaU0EnJ2l1sBE5r3BYlNPJ188b6UQnZDQOyUGXmi_LFg7hVXrtMxis6d8OMUPl07UeDXokS_dcS1huKBERCYjNDS1snVFMzabR2wwW4tWEot_i9QBn3UFw2mlASo-edC1sE6EXookhSBdBNkMsoS8qOWiAfE0T-a3mvYSAmSd2DBtYGbmCEajDFpU7gnafdtpmmtg-lEkDdHJmRXlDEehBX7ffyUQtGqb58ZvKVFC9-bgv-7D7bg',
    alt: 'The Royal Coconut Pool Villa at twilight',
    badge: '2-BEDROOM VILLA • 4 GUESTS',
    size: '160 m² (1,720 sq ft)',
    description:
      "The pinnacle residence: two king master suites, sprawling open-air living salon, 10m private lap pool, chef's pantry, and personal resident butler.",
    features: ['10m Private Infinity Pool', '2 King Master Suites', 'Personal Butler'],
    priceUsd: 340,
    priceLkr: 102000,
  },
]

export const experiences: Experience[] = [
  {
    category: 'Gastronomy',
    title: 'Floating Breakfast & Artisan Dining',
    description: 'Handmade hoppers, fresh tropical harvests, and king coconut served on pool rafts.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4M-yEjISKvAPzvSN5CMMRzLDDT0aFRLShPSWluyf7ltPXAz_SoG5clbWgYhM_7zpEK-KbUz8ONKTDi1MXi30RbRlttNIPhznaiqQTdTMroVD6dRo2sqENV54af7R5f99Q5iXhwjZhrZs9MQmvPUnKt2cOFDNFIPV4pMx8neU5PGYdAjjat1kw08Tk-AO-wV0lOfFAkXO4UwqpyT1D2l_V6P6afCL4cMZyjk4zL4HgFT0Up0f9bZZG6w',
    alt: 'Floating breakfast and artisan dining',
    linkText: 'VIEW MENUS',
  },
  {
    category: 'Holistic health',
    title: 'Ayurvedic Spa & Herbal Therapies',
    description: 'Ancient rejuvenation rites led by our resident Vaidya physician utilizing estate herbs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC29-y67j76JAJb64xHcOnPP_w8jqtkKbGtIuaOaIs9TqAf16HzlxmQ1lf5hkyi9DG_28hiGJvJsYJweHERggobNgJkKn8c30Xm5Z8RgTF6JyhH34e70xpSJmGsauxewPp_Gdg0Hr5rgn8kcW9r-t2OCZiREFCh64hEABCb1lRGESqxSzvV0EG5ylNFFZCj03F1M7X9uhaXz1OvrG6u85IW2uTwuY9acpM943nLy-nZBWVY8MmfJg7KrA',
    alt: 'Ayurvedic spa and herbal therapies',
    linkText: 'SPA RITUALS',
  },
  {
    category: 'Culture',
    title: 'Galle Fort & Cinnamon Tour',
    description: 'A private historical stroll along 17th-century ramparts, followed by ancestral peelings.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBncOqIGgZMJOZOsnhaa8fOZw1FIkSB7wK3YbTwz2fDuCzJAxOBAhGhtY8qMbUusnt-WNBMXRcIfYGaMzDMkP2OrAdR9nOLkBFc9Ao5Poew5SDg6_D-sSAOw9U8q6jediHXJJKeLLcQWenAox651yBF3q51Ssd4tUDleR1v6aybyWKYS3ZDDOGKmJTWlwXFZpwLjlfzvW6DucNzsfuPeP9VmfVipz6zcxQRr0cEQnxQIyJqLS24QgqKTQ',
    alt: 'Galle Fort and cinnamon estate tour',
    linkText: 'HERITAGE MAP',
  },
  {
    category: 'Ocean expedition',
    title: 'Catamaran Whale Safari',
    description: 'A private vessel chartered from Mirissa harbor to witness majestic blue whales in peace.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDEV0JYM9vWnCh4QZgJ_dasU5F-J3VibbmTChsQi6hZxbyVeFvBY3vvBCLJkXwvm0PPkR_9Se6Raojn3nFQ5lmdD4ufSB_o9rGERWS2c2kJNxjk-g29fNKAD7yP5e9J2nE6FuNNOScvlXufnaOl9vsyRnY1jdNA4m0AmkYrvDuNaogA3ZXkkOECZf0RkW4Uo5Hsd68G75MY26EU6sUVXAK2tYYIaoSDevEyoRP-wjLIXIg7YqW9iiOrmQ',
    alt: 'Catamaran whale safari off the southern coast',
    linkText: 'CHARTER DETAILS',
  },
]

export const features = [
  {
    icon: 'fa-water-ladder',
    title: '15m Saltwater Lap Pool',
    description: 'Naturally filtered and bordered by fragrant frangipanis, shaded teak daybeds, and private outdoor rain showers.',
  },
  {
    icon: 'fa-bell-concierge',
    title: 'Villa Butler & Private Chef',
    description: 'Unobtrusive 24-hour dedicated host care with bespoke seaside dining tailored to dietary preferences.',
  },
  {
    icon: 'fa-compass',
    title: 'Direct Ocean Access',
    description: 'A private sandy garden path leading to secluded turtle coves and gentle southern reef surf breaks.',
  },
  {
    icon: 'fa-leaf',
    title: 'Regenerative Luxury',
    description: 'Rainwater catchment, zero single-use plastics, and community cinnamon estate partnership programs.',
  },
]
