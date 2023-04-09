const currencyList = [
  {
    country: 'United States',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Euro Member Countries',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'United Kingdom',
    iso: 'GBP',
    name: 'British Pound',
    symbol: '£'
  },
  {
    country: 'Canada',
    iso: 'CAD',
    name: 'Canadian Dollar',
    symbol: '$'
  },
  {
    country: 'Australia',
    iso: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Japan',
    iso: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥'
  },
  {
    country: 'India',
    iso: 'INR',
    name: 'Indian Rupee',
    symbol: '₹'
  },
  {
    country: 'China',
    iso: 'CNY',
    name: 'Chinese Yuan',
    symbol: '¥'
  },
  {
    country: 'Brazil',
    iso: 'BRL',
    name: 'Brazilian Real',
    symbol: 'R$'
  },
  {
    country: 'Singapore',
    iso: 'SGD',
    name: 'Singapore Dollar',
    symbol: '$'
  },
  {
    country: 'Russia',
    iso: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽'
  },
  {
    country: 'Vietnam',
    iso: 'VND',
    name: 'Vietnamese Dong',
    symbol: '₫'
  },
  {
    country: 'Korea, South',
    iso: 'KRW',
    name: 'South Korean Won',
    symbol: '₩'
  },
  {
    country: 'Hong Kong',
    iso: 'HKD',
    name: 'Hong Kong Dollar',
    symbol: '$'
  },
  {
    country: 'Sweden',
    iso: 'SEK',
    name: 'Swedish Krona',
    symbol: 'kr'
  },
  {
    country: 'Switzerland',
    iso: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF'
  },
  {
    country: 'Central African CFA Franc BEAC',
    iso: 'XAF',
    name: 'Central African Cfa Franc BEAC',
    symbol: 'FCFA'
  },
  {
    country: 'Afghanistan',
    iso: 'AFN',
    name: 'Afghan Afghani',
    symbol: '؋'
  },
  {
    country: 'Albania',
    iso: 'ALL',
    name: 'Albanian Lek',
    symbol: 'Lek'
  },
  {
    country: 'Algeria',
    iso: 'DZD',
    name: 'Algerian Dinar',
    symbol: 'دج'
  },
  {
    country: 'Andorra',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Angola',
    iso: 'AOA',
    name: 'Angolan Kwanza',
    symbol: 'Kz'
  },
  {
    country: 'Antigua and Barbuda',
    iso: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Argentina',
    iso: 'ARS',
    name: 'Argentine Peso',
    symbol: '$'
  },
  {
    country: 'Armenia',
    iso: 'AMD',
    name: 'Armenian Dram',
    symbol: '֏'
  },
  {
    country: 'Austria',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Azerbaijan',
    iso: 'AZN',
    name: 'Azerbaijani Manat',
    symbol: '₼'
  },
  {
    country: 'Bahamas',
    iso: 'BSD',
    name: 'Bahamian Dollar',
    symbol: '$'
  },
  {
    country: 'Bahrain',
    iso: 'BHD',
    name: 'Bahraini Dinar',
    symbol: '.د.ب'
  },
  {
    country: 'Bangladesh',
    iso: 'BDT',
    name: 'Bangladeshi Taka',
    symbol: '৳'
  },
  {
    country: 'Barbados',
    iso: 'BBD',
    name: 'Barbadian Dollar',
    symbol: '$'
  },
  {
    country: 'Belarus',
    iso: 'BYN',
    name: ' Belarusian Ruble',
    symbol: 'Br'
  },
  {
    country: 'Belgium',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Belize',
    iso: 'BZD',
    name: 'Belize Dollar',
    symbol: 'BZ$'
  },
  {
    country: 'Benin',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Bhutan',
    iso: 'BTN',
    name: 'Bhutanese Ngultrum',
    symbol: 'Nu.'
  },
  {
    country: 'Bolivia',
    iso: 'BOB',
    name: 'Bolivian Boliviano',
    symbol: '$b'
  },
  {
    country: 'Bosnia and Herzegovina',
    iso: 'BAM',
    name: 'Bosnia And Herzegovina Convertible Mark',
    symbol: 'KM'
  },
  {
    country: 'Botswana',
    iso: 'BWP',
    name: 'Botswana Pula',
    symbol: 'P'
  },
  {
    country: 'Brunei',
    iso: 'BND',
    name: 'Brunei Dollar',
    symbol: '$'
  },
  {
    country: 'Bulgaria',
    iso: 'BGN',
    name: 'Bulgarian Lev',
    symbol: 'лв'
  },
  {
    country: 'Burkina Faso',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Burundi',
    iso: 'BIF',
    name: 'Burundian Franc',
    symbol: 'FBu'
  },
  {
    country: 'Cambodia',
    iso: 'KHR',
    name: 'Cambodian Riel',
    symbol: '៛'
  },
  {
    country: 'Cameroon',
    iso: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Cape Verde',
    iso: 'CVE',
    name: 'Cape Verdean Escudo',
    symbol: '$'
  },
  {
    country: 'Central African Republic',
    iso: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Chad',
    iso: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Chile',
    iso: 'CLP',
    name: 'Chilean Peso',
    symbol: '$'
  },
  {
    country: 'Colombia',
    iso: 'COP',
    name: 'Colombian Peso',
    symbol: '$'
  },
  {
    country: 'Comoros',
    iso: 'KMF',
    name: 'Comorian Franc',
    symbol: 'CF'
  },
  {
    country: 'Costa Rica',
    iso: 'CRC',
    name: 'Costa Rican Colón',
    symbol: '₡'
  },
  {
    country: 'Croatia',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Cuba',
    iso: 'CUP',
    name: 'Cuban Peso',
    symbol: '₱'
  },
  {
    country: 'Cyprus',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Czech Republic',
    iso: 'CZK',
    name: 'Czech Koruna',
    symbol: 'Kč'
  },
  {
    country: 'Democratic Republic of Congo',
    iso: 'CDF',
    name: 'Congolese Franc',
    symbol: 'FC'
  },
  {
    country: 'Denmark',
    iso: 'DKK',
    name: 'Danish Krone',
    symbol: 'kr'
  },
  {
    country: 'Djibouti',
    iso: 'DJF',
    name: 'Djiboutian Franc',
    symbol: 'Fdj'
  },
  {
    country: 'Dominica',
    iso: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Dominican Republic',
    iso: 'DOP',
    name: 'Dominican Peso',
    symbol: 'RD$'
  },
  {
    country: 'East Timor',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Ecuador',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Egypt',
    iso: 'EGP',
    name: 'Egyptian Pound',
    symbol: '£'
  },
  {
    country: 'El Salvador',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Equatorial Guinea',
    iso: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Eritrea',
    iso: 'ERN',
    name: 'Eritrean Nakfa',
    symbol: 'Nfk'
  },
  {
    country: 'Estonia',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Eswatini',
    iso: 'SZL',
    name: 'Swazi Lilangeni',
    symbol: 'E'
  },
  {
    country: 'Ethiopia',
    iso: 'ETB',
    name: 'Ethiopian Birr',
    symbol: 'Br'
  },
  {
    country: 'Fiji',
    iso: 'FJD',
    name: 'Fijian Dollar',
    symbol: '$'
  },
  {
    country: 'Finland',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'France',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Gabon',
    iso: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Gambia',
    iso: 'GMD',
    name: 'Gambian Dalasi',
    symbol: 'D'
  },
  {
    country: 'Georgia',
    iso: 'GEL',
    name: 'Georgian Lari',
    symbol: '₾'
  },
  {
    country: 'Germany',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Ghana',
    iso: 'GHS',
    name: 'Ghanaian Cedi',
    symbol: 'GH₵'
  },
  {
    country: 'Greece',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Grenada',
    iso: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Guatemala',
    iso: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbol: 'Q'
  },
  {
    country: 'Guinea',
    iso: 'GNF',
    name: 'Guinean Franc',
    symbol: 'FG'
  },
  {
    country: 'Guinea-Bissau',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Guyana',
    iso: 'GYD',
    name: 'Guyanese Dollar',
    symbol: '$'
  },
  {
    country: 'Haiti',
    iso: 'HTG',
    name: 'Haitian Gourde',
    symbol: 'G'
  },
  {
    country: 'Honduras',
    iso: 'HNL',
    name: 'Honduran Lempira',
    symbol: 'L'
  },
  {
    country: 'Hungary',
    iso: 'HUF',
    name: 'Hungarian Forint',
    symbol: 'Ft'
  },
  {
    country: 'Iceland',
    iso: 'ISK',
    name: 'Icelandic Króna',
    symbol: 'kr'
  },
  {
    country: 'Indonesia',
    iso: 'IDR',
    name: 'Indonesian Rupiah',
    symbol: 'Rp'
  },
  {
    country: 'Iran',
    iso: 'IRR',
    name: 'Iranian Rial',
    symbol: '﷼'
  },
  {
    country: 'Iraq',
    iso: 'IQD',
    name: 'Iraqi Dinar',
    symbol: 'ع.د'
  },
  {
    country: 'Ireland',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Israel',
    iso: 'ILS',
    name: 'Israeli New Shekel',
    symbol: '₪'
  },
  {
    country: 'Italy',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Ivory Coast',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Jamaica',
    iso: 'JMD',
    name: 'Jamaican Dollar',
    symbol: 'J$'
  },
  {
    country: 'Jordan',
    iso: 'JOD',
    name: 'Jordanian Dinar',
    symbol: 'JD'
  },
  {
    country: 'Kazakhstan',
    iso: 'KZT',
    name: 'Kazakhstani Tenge',
    symbol: 'лв'
  },
  {
    country: 'Kenya',
    iso: 'KES',
    name: 'Kenyan Shilling',
    symbol: 'KSh'
  },
  {
    country: 'Kiribati',
    iso: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Korea, North',
    iso: 'KPW',
    name: 'North Korean Won',
    symbol: '₩'
  },
  {
    country: 'Kosovo',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Kuwait',
    iso: 'KWD',
    name: 'Kuwaiti Dinar',
    symbol: 'KD'
  },
  {
    country: 'Kyrgyzstan',
    iso: 'KGS',
    name: 'Kyrgyzstani Som',
    symbol: 'лв'
  },
  {
    country: 'Laos',
    iso: 'LAK',
    name: 'Lao Kip',
    symbol: '₭'
  },
  {
    country: 'Latvia',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Lebanon',
    iso: 'LBP',
    name: 'Lebanese Pound',
    symbol: '£'
  },
  {
    country: 'Lesotho',
    iso: 'LSL',
    name: 'Lesotho Loti',
    symbol: 'M'
  },
  {
    country: 'Liberia',
    iso: 'LRD',
    name: 'Liberian Dollar',
    symbol: '$'
  },
  {
    country: 'Libya',
    iso: 'LYD',
    name: 'Libyan Dinar',
    symbol: 'LD'
  },
  {
    country: 'Liechtenstein',
    iso: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF'
  },
  {
    country: 'Lithuania',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Luxembourg',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Madagascar',
    iso: 'MGA',
    name: 'Malagasy Ariary',
    symbol: 'Ar'
  },
  {
    country: 'Malawi',
    iso: 'MWK',
    name: 'Malawian Kwacha',
    symbol: 'MK'
  },
  {
    country: 'Malaysia',
    iso: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM'
  },
  {
    country: 'Maldives',
    iso: 'MVR',
    name: 'Maldivian Rufiyaa',
    symbol: 'Rf'
  },
  {
    country: 'Mali',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Malta',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Marshall Islands',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Mauritania',
    iso: 'MRU',
    name: 'Mauritanian Ouguiya',
    symbol: 'UM'
  },
  {
    country: 'Mauritius',
    iso: 'MUR',
    name: 'Mauritian Rupee',
    symbol: '₨'
  },
  {
    country: 'Mexico',
    iso: 'MXN',
    name: 'Mexican Peso',
    symbol: '$'
  },
  {
    country: 'Micronesia',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Moldova',
    iso: 'MDL',
    name: 'Moldovan Leu',
    symbol: 'lei'
  },
  {
    country: 'Monaco',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Montenegro',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Morocco',
    iso: 'MAD',
    name: 'Moroccan Dirham',
    symbol: 'MAD'
  },
  {
    country: 'Mozambique',
    iso: 'MZN',
    name: 'Mozambican Metical',
    symbol: 'MT'
  },
  {
    country: 'Myanmar',
    iso: 'MMK',
    name: 'Burmese Kyat',
    symbol: 'K'
  },
  {
    country: 'Namibia',
    iso: 'NAD',
    name: 'Namibian Dollar',
    symbol: '$'
  },
  {
    country: 'Nauru',
    iso: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Nepal',
    iso: 'NPR',
    name: 'Nepalese Rupee',
    symbol: '₨'
  },
  {
    country: 'Netherlands',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'New Zealand',
    iso: 'NZD',
    name: 'New Zealand Dollar',
    symbol: '$'
  },
  {
    country: 'Nicaragua',
    iso: 'NIO',
    name: 'Nicaraguan Córdoba',
    symbol: 'C$'
  },
  {
    country: 'Niger',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Nigeria',
    iso: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦'
  },
  {
    country: 'North Macedonia',
    iso: 'MKD',
    name: 'Macedonian Denar',
    symbol: 'ден'
  },
  {
    country: 'Norway',
    iso: 'NOK',
    name: 'Norwegian Krone',
    symbol: 'kr'
  },
  {
    country: 'Oman',
    iso: 'OMR',
    name: 'Omani Rial',
    symbol: '﷼'
  },
  {
    country: 'Pakistan',
    iso: 'PKR',
    name: 'Pakistani Rupee',
    symbol: '₨'
  },
  {
    country: 'Palau',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Palestine',
    iso: 'ILS',
    name: 'Israeli New Shekel',
    symbol: '₪'
  },
  {
    country: 'Panama',
    iso: 'PAB',
    name: 'Panamanian Balboa',
    symbol: 'B/.'
  },
  {
    country: 'Papua New Guinea',
    iso: 'PGK',
    name: 'Papua New Guinean Kina',
    symbol: 'K'
  },
  {
    country: 'Paraguay',
    iso: 'PYG',
    name: 'Paraguayan Guaraní',
    symbol: 'Gs'
  },
  {
    country: 'Peru',
    iso: 'PEN',
    name: 'Peruvian Sol',
    symbol: 'S/.'
  },
  {
    country: 'Philippines',
    iso: 'PHP',
    name: 'Philippine Peso',
    symbol: '₱'
  },
  {
    country: 'Poland',
    iso: 'PLN',
    name: 'Polish Zloty',
    symbol: 'zł'
  },
  {
    country: 'Portugal',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Qatar',
    iso: 'QAR',
    name: 'Qatari Riyal',
    symbol: '﷼'
  },
  {
    country: 'Republic of the Congo',
    iso: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Romania',
    iso: 'RON',
    name: 'Romanian Leu',
    symbol: 'lei'
  },
  {
    country: 'Rwanda',
    iso: 'RWF',
    name: 'Rwandan Franc',
    symbol: 'R₣'
  },
  {
    country: 'Saint Kitts and Nevis',
    iso: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Saint Lucia',
    iso: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Saint Vincent and the Grenadines',
    iso: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Samoa',
    iso: 'WST',
    name: 'Samoan Tala',
    symbol: 'WS$'
  },
  {
    country: 'San Marino',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Saudi Arabia',
    iso: 'SAR',
    name: 'Saudi Riyal',
    symbol: '﷼'
  },
  {
    country: 'Senegal',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Serbia',
    iso: 'RSD',
    name: 'Serbian Dinar',
    symbol: 'Дин.'
  },
  {
    country: 'Seychelles',
    iso: 'SCR',
    name: 'Seychellois Rupee',
    symbol: '₨'
  },
  {
    country: 'Sierra Leone',
    iso: 'SLL',
    name: 'Sierra Leonean Leone',
    symbol: 'Le'
  },
  {
    country: 'Slovakia',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Slovenia',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Solomon Islands',
    iso: 'SBD',
    name: 'Solomon Islands Dollar',
    symbol: '$'
  },
  {
    country: 'Somalia',
    iso: 'SOS',
    name: 'Somali Shilling',
    symbol: 'S'
  },
  {
    country: 'South Africa',
    iso: 'ZAR',
    name: 'South African Rand',
    symbol: 'R'
  },
  {
    country: 'Spain',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Sri Lanka',
    iso: 'LKR',
    name: 'Sri Lankan Rupee',
    symbol: '₨'
  },
  {
    country: 'Sudan',
    iso: 'SDG',
    name: 'Sudanese Pound',
    symbol: 'ج.س.'
  },
  {
    country: 'Suriname',
    iso: 'SRD',
    name: 'Surinamese Dollar',
    symbol: '$'
  },
  {
    country: 'Taiwan',
    iso: 'TWD',
    name: 'New Taiwan Dollar',
    symbol: 'NT$'
  },
  {
    country: 'Tajikistan',
    iso: 'TJS',
    name: 'Tajikistani Somoni',
    symbol: 'SM'
  },
  {
    country: 'Tanzania',
    iso: 'TZS',
    name: 'Tanzanian Shilling',
    symbol: 'TSh'
  },
  {
    country: 'Thailand',
    iso: 'THB',
    name: 'Thai Baht',
    symbol: '฿'
  },
  {
    country: 'Togo',
    iso: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Tonga',
    iso: 'TOP',
    name: "Tongan Pa'anga",
    symbol: 'T$'
  },
  {
    country: 'Trinidad and Tobago',
    iso: 'TTD',
    name: 'Trinidad And Tobago Dollar',
    symbol: 'TT$'
  },
  {
    country: 'Tunisia',
    iso: 'TND',
    name: 'Tunisian Dinar',
    symbol: 'د.ت'
  },
  {
    country: 'Turkey',
    iso: 'TRY',
    name: 'Turkish Lira',
    symbol: '₺'
  },
  {
    country: 'Turkmenistan',
    iso: 'TMT',
    name: 'Turkmenistan Manat',
    symbol: 'T'
  },
  {
    country: 'Tuvalu',
    iso: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Uganda',
    iso: 'UGX',
    name: 'Ugandan Shilling',
    symbol: 'USh'
  },
  {
    country: 'Ukraine',
    iso: 'UAH',
    name: 'Ukrainian Hryvnia',
    symbol: '₴'
  },
  {
    country: 'United Arab Emirates',
    iso: 'AED',
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ'
  },
  {
    country: 'United States',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Uruguay',
    iso: 'UYU',
    name: 'Uruguayan Peso',
    symbol: '$U'
  },
  {
    country: 'Uzbekistan',
    iso: 'UZS',
    name: 'Uzbekistani Som',
    symbol: 'лв'
  },
  {
    country: 'Vanuatu',
    iso: 'VUV',
    name: 'Vanuatu Vatu',
    symbol: 'VT'
  },
  {
    country: 'Vatican City',
    iso: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Venezuela',
    iso: 'VEF',
    name: 'Venezuelan Bolívar',
    symbol: 'Bs'
  },
  {
    country: 'Yemen',
    iso: 'YER',
    name: 'Yemeni Rial',
    symbol: '﷼'
  },
  {
    country: 'Zambia',
    iso: 'ZMW',
    name: 'Zambian Kwacha',
    symbol: 'ZK'
  },
  {
    country: 'Zimbabwe',
    iso: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  }
]

export default currencyList;