const currencyList = [
  {
    country: 'United States',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Euro Member Countries',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'United Kingdom',
    isoCode: 'GBP',
    name: 'British Pound',
    symbol: '£'
  },
  {
    country: 'Canada',
    isoCode: 'CAD',
    name: 'Canadian Dollar',
    symbol: '$'
  },
  {
    country: 'Australia',
    isoCode: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Japan',
    isoCode: 'JPY',
    name: 'Japanese Yen',
    symbol: '¥'
  },
  {
    country: 'India',
    isoCode: 'INR',
    name: 'Indian Rupee',
    symbol: '₹'
  },
  {
    country: 'China',
    isoCode: 'CNY',
    name: 'Chinese Yuan',
    symbol: '¥'
  },
  {
    country: 'Brazil',
    isoCode: 'BRL',
    name: 'Brazilian Real',
    symbol: 'R$'
  },
  {
    country: 'Singapore',
    isoCode: 'SGD',
    name: 'Singapore Dollar',
    symbol: '$'
  },
  {
    country: 'Russia',
    isoCode: 'RUB',
    name: 'Russian Ruble',
    symbol: '₽'
  },
  {
    country: 'Vietnam',
    isoCode: 'VND',
    name: 'Vietnamese Dong',
    symbol: '₫'
  },
  {
    country: 'Korea, South',
    isoCode: 'KRW',
    name: 'South Korean Won',
    symbol: '₩'
  },
  {
    country: 'Hong Kong',
    isoCode: 'HKD',
    name: 'Hong Kong Dollar',
    symbol: '$'
  },
  {
    country: 'Sweden',
    isoCode: 'SEK',
    name: 'Swedish Krona',
    symbol: 'kr'
  },
  {
    country: 'Switzerland',
    isoCode: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF'
  },
  {
    country: 'Central African CFA Franc BEAC',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc BEAC',
    symbol: 'FCFA'
  },
  {
    country: 'Afghanistan',
    isoCode: 'AFN',
    name: 'Afghan Afghani',
    symbol: '؋'
  },
  {
    country: 'Albania',
    isoCode: 'ALL',
    name: 'Albanian Lek',
    symbol: 'Lek'
  },
  {
    country: 'Algeria',
    isoCode: 'DZD',
    name: 'Algerian Dinar',
    symbol: 'دج'
  },
  {
    country: 'Andorra',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Angola',
    isoCode: 'AOA',
    name: 'Angolan Kwanza',
    symbol: 'Kz'
  },
  {
    country: 'Antigua and Barbuda',
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Argentina',
    isoCode: 'ARS',
    name: 'Argentine Peso',
    symbol: '$'
  },
  {
    country: 'Armenia',
    isoCode: 'AMD',
    name: 'Armenian Dram',
    symbol: '֏'
  },
  {
    country: 'Austria',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Azerbaijan',
    isoCode: 'AZN',
    name: 'Azerbaijani Manat',
    symbol: '₼'
  },
  {
    country: 'Bahamas',
    isoCode: 'BSD',
    name: 'Bahamian Dollar',
    symbol: '$'
  },
  {
    country: 'Bahrain',
    isoCode: 'BHD',
    name: 'Bahraini Dinar',
    symbol: '.د.ب'
  },
  {
    country: 'Bangladesh',
    isoCode: 'BDT',
    name: 'Bangladeshi Taka',
    symbol: '৳'
  },
  {
    country: 'Barbados',
    isoCode: 'BBD',
    name: 'Barbadian Dollar',
    symbol: '$'
  },
  {
    country: 'Belarus',
    isoCode: 'BYN',
    name: ' Belarusian Ruble',
    symbol: 'Br'
  },
  {
    country: 'Belgium',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Belize',
    isoCode: 'BZD',
    name: 'Belize Dollar',
    symbol: 'BZ$'
  },
  {
    country: 'Benin',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Bhutan',
    isoCode: 'BTN',
    name: 'Bhutanese Ngultrum',
    symbol: 'Nu.'
  },
  {
    country: 'Bolivia',
    isoCode: 'BOB',
    name: 'Bolivian Boliviano',
    symbol: '$b'
  },
  {
    country: 'Bosnia and Herzegovina',
    isoCode: 'BAM',
    name: 'Bosnia And Herzegovina Convertible Mark',
    symbol: 'KM'
  },
  {
    country: 'Botswana',
    isoCode: 'BWP',
    name: 'Botswana Pula',
    symbol: 'P'
  },
  {
    country: 'Brunei',
    isoCode: 'BND',
    name: 'Brunei Dollar',
    symbol: '$'
  },
  {
    country: 'Bulgaria',
    isoCode: 'BGN',
    name: 'Bulgarian Lev',
    symbol: 'лв'
  },
  {
    country: 'Burkina Faso',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Burundi',
    isoCode: 'BIF',
    name: 'Burundian Franc',
    symbol: 'FBu'
  },
  {
    country: 'Cambodia',
    isoCode: 'KHR',
    name: 'Cambodian Riel',
    symbol: '៛'
  },
  {
    country: 'Cameroon',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Cape Verde',
    isoCode: 'CVE',
    name: 'Cape Verdean Escudo',
    symbol: '$'
  },
  {
    country: 'Central African Republic',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Chad',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Chile',
    isoCode: 'CLP',
    name: 'Chilean Peso',
    symbol: '$'
  },
  {
    country: 'Colombia',
    isoCode: 'COP',
    name: 'Colombian Peso',
    symbol: '$'
  },
  {
    country: 'Comoros',
    isoCode: 'KMF',
    name: 'Comorian Franc',
    symbol: 'CF'
  },
  {
    country: 'Costa Rica',
    isoCode: 'CRC',
    name: 'Costa Rican Colón',
    symbol: '₡'
  },
  {
    country: 'Croatia',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Cuba',
    isoCode: 'CUP',
    name: 'Cuban Peso',
    symbol: '₱'
  },
  {
    country: 'Cyprus',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Czech Republic',
    isoCode: 'CZK',
    name: 'Czech Koruna',
    symbol: 'Kč'
  },
  {
    country: 'Democratic Republic of Congo',
    isoCode: 'CDF',
    name: 'Congolese Franc',
    symbol: 'FC'
  },
  {
    country: 'Denmark',
    isoCode: 'DKK',
    name: 'Danish Krone',
    symbol: 'kr'
  },
  {
    country: 'Djibouti',
    isoCode: 'DJF',
    name: 'Djiboutian Franc',
    symbol: 'Fdj'
  },
  {
    country: 'Dominica',
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Dominican Republic',
    isoCode: 'DOP',
    name: 'Dominican Peso',
    symbol: 'RD$'
  },
  {
    country: 'East Timor',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Ecuador',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Egypt',
    isoCode: 'EGP',
    name: 'Egyptian Pound',
    symbol: '£'
  },
  {
    country: 'El Salvador',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Equatorial Guinea',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Eritrea',
    isoCode: 'ERN',
    name: 'Eritrean Nakfa',
    symbol: 'Nfk'
  },
  {
    country: 'Estonia',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Eswatini',
    isoCode: 'SZL',
    name: 'Swazi Lilangeni',
    symbol: 'E'
  },
  {
    country: 'Ethiopia',
    isoCode: 'ETB',
    name: 'Ethiopian Birr',
    symbol: 'Br'
  },
  {
    country: 'Fiji',
    isoCode: 'FJD',
    name: 'Fijian Dollar',
    symbol: '$'
  },
  {
    country: 'Finland',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'France',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Gabon',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Gambia',
    isoCode: 'GMD',
    name: 'Gambian Dalasi',
    symbol: 'D'
  },
  {
    country: 'Georgia',
    isoCode: 'GEL',
    name: 'Georgian Lari',
    symbol: '₾'
  },
  {
    country: 'Germany',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Ghana',
    isoCode: 'GHS',
    name: 'Ghanaian Cedi',
    symbol: 'GH₵'
  },
  {
    country: 'Greece',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Grenada',
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Guatemala',
    isoCode: 'GTQ',
    name: 'Guatemalan Quetzal',
    symbol: 'Q'
  },
  {
    country: 'Guinea',
    isoCode: 'GNF',
    name: 'Guinean Franc',
    symbol: 'FG'
  },
  {
    country: 'Guinea-Bissau',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Guyana',
    isoCode: 'GYD',
    name: 'Guyanese Dollar',
    symbol: '$'
  },
  {
    country: 'Haiti',
    isoCode: 'HTG',
    name: 'Haitian Gourde',
    symbol: 'G'
  },
  {
    country: 'Honduras',
    isoCode: 'HNL',
    name: 'Honduran Lempira',
    symbol: 'L'
  },
  {
    country: 'Hungary',
    isoCode: 'HUF',
    name: 'Hungarian Forint',
    symbol: 'Ft'
  },
  {
    country: 'Iceland',
    isoCode: 'ISK',
    name: 'Icelandic Króna',
    symbol: 'kr'
  },
  {
    country: 'Indonesia',
    isoCode: 'IDR',
    name: 'Indonesian Rupiah',
    symbol: 'Rp'
  },
  {
    country: 'Iran',
    isoCode: 'IRR',
    name: 'Iranian Rial',
    symbol: '﷼'
  },
  {
    country: 'Iraq',
    isoCode: 'IQD',
    name: 'Iraqi Dinar',
    symbol: 'ع.د'
  },
  {
    country: 'Ireland',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Israel',
    isoCode: 'ILS',
    name: 'Israeli New Shekel',
    symbol: '₪'
  },
  {
    country: 'Italy',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Ivory Coast',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Jamaica',
    isoCode: 'JMD',
    name: 'Jamaican Dollar',
    symbol: 'J$'
  },
  {
    country: 'Jordan',
    isoCode: 'JOD',
    name: 'Jordanian Dinar',
    symbol: 'JD'
  },
  {
    country: 'Kazakhstan',
    isoCode: 'KZT',
    name: 'Kazakhstani Tenge',
    symbol: 'лв'
  },
  {
    country: 'Kenya',
    isoCode: 'KES',
    name: 'Kenyan Shilling',
    symbol: 'KSh'
  },
  {
    country: 'Kiribati',
    isoCode: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Korea, North',
    isoCode: 'KPW',
    name: 'North Korean Won',
    symbol: '₩'
  },
  {
    country: 'Kosovo',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Kuwait',
    isoCode: 'KWD',
    name: 'Kuwaiti Dinar',
    symbol: 'KD'
  },
  {
    country: 'Kyrgyzstan',
    isoCode: 'KGS',
    name: 'Kyrgyzstani Som',
    symbol: 'лв'
  },
  {
    country: 'Laos',
    isoCode: 'LAK',
    name: 'Lao Kip',
    symbol: '₭'
  },
  {
    country: 'Latvia',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Lebanon',
    isoCode: 'LBP',
    name: 'Lebanese Pound',
    symbol: '£'
  },
  {
    country: 'Lesotho',
    isoCode: 'LSL',
    name: 'Lesotho Loti',
    symbol: 'M'
  },
  {
    country: 'Liberia',
    isoCode: 'LRD',
    name: 'Liberian Dollar',
    symbol: '$'
  },
  {
    country: 'Libya',
    isoCode: 'LYD',
    name: 'Libyan Dinar',
    symbol: 'LD'
  },
  {
    country: 'Liechtenstein',
    isoCode: 'CHF',
    name: 'Swiss Franc',
    symbol: 'CHF'
  },
  {
    country: 'Lithuania',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Luxembourg',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Madagascar',
    isoCode: 'MGA',
    name: 'Malagasy Ariary',
    symbol: 'Ar'
  },
  {
    country: 'Malawi',
    isoCode: 'MWK',
    name: 'Malawian Kwacha',
    symbol: 'MK'
  },
  {
    country: 'Malaysia',
    isoCode: 'MYR',
    name: 'Malaysian Ringgit',
    symbol: 'RM'
  },
  {
    country: 'Maldives',
    isoCode: 'MVR',
    name: 'Maldivian Rufiyaa',
    symbol: 'Rf'
  },
  {
    country: 'Mali',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Malta',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Marshall Islands',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Mauritania',
    isoCode: 'MRU',
    name: 'Mauritanian Ouguiya',
    symbol: 'UM'
  },
  {
    country: 'Mauritius',
    isoCode: 'MUR',
    name: 'Mauritian Rupee',
    symbol: '₨'
  },
  {
    country: 'Mexico',
    isoCode: 'MXN',
    name: 'Mexican Peso',
    symbol: '$'
  },
  {
    country: 'Micronesia',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Moldova',
    isoCode: 'MDL',
    name: 'Moldovan Leu',
    symbol: 'lei'
  },
  {
    country: 'Monaco',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Montenegro',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Morocco',
    isoCode: 'MAD',
    name: 'Moroccan Dirham',
    symbol: 'MAD'
  },
  {
    country: 'Mozambique',
    isoCode: 'MZN',
    name: 'Mozambican Metical',
    symbol: 'MT'
  },
  {
    country: 'Myanmar',
    isoCode: 'MMK',
    name: 'Burmese Kyat',
    symbol: 'K'
  },
  {
    country: 'Namibia',
    isoCode: 'NAD',
    name: 'Namibian Dollar',
    symbol: '$'
  },
  {
    country: 'Nauru',
    isoCode: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Nepal',
    isoCode: 'NPR',
    name: 'Nepalese Rupee',
    symbol: '₨'
  },
  {
    country: 'Netherlands',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'New Zealand',
    isoCode: 'NZD',
    name: 'New Zealand Dollar',
    symbol: '$'
  },
  {
    country: 'Nicaragua',
    isoCode: 'NIO',
    name: 'Nicaraguan Córdoba',
    symbol: 'C$'
  },
  {
    country: 'Niger',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Nigeria',
    isoCode: 'NGN',
    name: 'Nigerian Naira',
    symbol: '₦'
  },
  {
    country: 'North Macedonia',
    isoCode: 'MKD',
    name: 'Macedonian Denar',
    symbol: 'ден'
  },
  {
    country: 'Norway',
    isoCode: 'NOK',
    name: 'Norwegian Krone',
    symbol: 'kr'
  },
  {
    country: 'Oman',
    isoCode: 'OMR',
    name: 'Omani Rial',
    symbol: '﷼'
  },
  {
    country: 'Pakistan',
    isoCode: 'PKR',
    name: 'Pakistani Rupee',
    symbol: '₨'
  },
  {
    country: 'Palau',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Palestine',
    isoCode: 'ILS',
    name: 'Israeli New Shekel',
    symbol: '₪'
  },
  {
    country: 'Panama',
    isoCode: 'PAB',
    name: 'Panamanian Balboa',
    symbol: 'B/.'
  },
  {
    country: 'Papua New Guinea',
    isoCode: 'PGK',
    name: 'Papua New Guinean Kina',
    symbol: 'K'
  },
  {
    country: 'Paraguay',
    isoCode: 'PYG',
    name: 'Paraguayan Guaraní',
    symbol: 'Gs'
  },
  {
    country: 'Peru',
    isoCode: 'PEN',
    name: 'Peruvian Sol',
    symbol: 'S/.'
  },
  {
    country: 'Philippines',
    isoCode: 'PHP',
    name: 'Philippine Peso',
    symbol: '₱'
  },
  {
    country: 'Poland',
    isoCode: 'PLN',
    name: 'Polish Zloty',
    symbol: 'zł'
  },
  {
    country: 'Portugal',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Qatar',
    isoCode: 'QAR',
    name: 'Qatari Riyal',
    symbol: '﷼'
  },
  {
    country: 'Republic of the Congo',
    isoCode: 'XAF',
    name: 'Central African Cfa Franc',
    symbol: 'FCFA'
  },
  {
    country: 'Romania',
    isoCode: 'RON',
    name: 'Romanian Leu',
    symbol: 'lei'
  },
  {
    country: 'Rwanda',
    isoCode: 'RWF',
    name: 'Rwandan Franc',
    symbol: 'R₣'
  },
  {
    country: 'Saint Kitts and Nevis',
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Saint Lucia',
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Saint Vincent and the Grenadines',
    isoCode: 'XCD',
    name: 'East Caribbean Dollar',
    symbol: '$'
  },
  {
    country: 'Samoa',
    isoCode: 'WST',
    name: 'Samoan Tala',
    symbol: 'WS$'
  },
  {
    country: 'San Marino',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Saudi Arabia',
    isoCode: 'SAR',
    name: 'Saudi Riyal',
    symbol: '﷼'
  },
  {
    country: 'Senegal',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Serbia',
    isoCode: 'RSD',
    name: 'Serbian Dinar',
    symbol: 'Дин.'
  },
  {
    country: 'Seychelles',
    isoCode: 'SCR',
    name: 'Seychellois Rupee',
    symbol: '₨'
  },
  {
    country: 'Sierra Leone',
    isoCode: 'SLL',
    name: 'Sierra Leonean Leone',
    symbol: 'Le'
  },
  {
    country: 'Slovakia',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Slovenia',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Solomon Islands',
    isoCode: 'SBD',
    name: 'Solomon Islands Dollar',
    symbol: '$'
  },
  {
    country: 'Somalia',
    isoCode: 'SOS',
    name: 'Somali Shilling',
    symbol: 'S'
  },
  {
    country: 'South Africa',
    isoCode: 'ZAR',
    name: 'South African Rand',
    symbol: 'R'
  },
  {
    country: 'Spain',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Sri Lanka',
    isoCode: 'LKR',
    name: 'Sri Lankan Rupee',
    symbol: '₨'
  },
  {
    country: 'Sudan',
    isoCode: 'SDG',
    name: 'Sudanese Pound',
    symbol: 'ج.س.'
  },
  {
    country: 'Suriname',
    isoCode: 'SRD',
    name: 'Surinamese Dollar',
    symbol: '$'
  },
  {
    country: 'Taiwan',
    isoCode: 'TWD',
    name: 'New Taiwan Dollar',
    symbol: 'NT$'
  },
  {
    country: 'Tajikistan',
    isoCode: 'TJS',
    name: 'Tajikistani Somoni',
    symbol: 'SM'
  },
  {
    country: 'Tanzania',
    isoCode: 'TZS',
    name: 'Tanzanian Shilling',
    symbol: 'TSh'
  },
  {
    country: 'Thailand',
    isoCode: 'THB',
    name: 'Thai Baht',
    symbol: '฿'
  },
  {
    country: 'Togo',
    isoCode: 'XOF',
    name: 'West African Cfa Franc',
    symbol: 'CFA'
  },
  {
    country: 'Tonga',
    isoCode: 'TOP',
    name: "Tongan Pa'anga",
    symbol: 'T$'
  },
  {
    country: 'Trinidad and Tobago',
    isoCode: 'TTD',
    name: 'Trinidad And Tobago Dollar',
    symbol: 'TT$'
  },
  {
    country: 'Tunisia',
    isoCode: 'TND',
    name: 'Tunisian Dinar',
    symbol: 'د.ت'
  },
  {
    country: 'Turkey',
    isoCode: 'TRY',
    name: 'Turkish Lira',
    symbol: '₺'
  },
  {
    country: 'Turkmenistan',
    isoCode: 'TMT',
    name: 'Turkmenistan Manat',
    symbol: 'T'
  },
  {
    country: 'Tuvalu',
    isoCode: 'AUD',
    name: 'Australian Dollar',
    symbol: '$'
  },
  {
    country: 'Uganda',
    isoCode: 'UGX',
    name: 'Ugandan Shilling',
    symbol: 'USh'
  },
  {
    country: 'Ukraine',
    isoCode: 'UAH',
    name: 'Ukrainian Hryvnia',
    symbol: '₴'
  },
  {
    country: 'United Arab Emirates',
    isoCode: 'AED',
    name: 'United Arab Emirates Dirham',
    symbol: 'د.إ'
  },
  {
    country: 'United States',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  },
  {
    country: 'Uruguay',
    isoCode: 'UYU',
    name: 'Uruguayan Peso',
    symbol: '$U'
  },
  {
    country: 'Uzbekistan',
    isoCode: 'UZS',
    name: 'Uzbekistani Som',
    symbol: 'лв'
  },
  {
    country: 'Vanuatu',
    isoCode: 'VUV',
    name: 'Vanuatu Vatu',
    symbol: 'VT'
  },
  {
    country: 'Vatican City',
    isoCode: 'EUR',
    name: 'Euro',
    symbol: '€'
  },
  {
    country: 'Venezuela',
    isoCode: 'VEF',
    name: 'Venezuelan Bolívar',
    symbol: 'Bs'
  },
  {
    country: 'Yemen',
    isoCode: 'YER',
    name: 'Yemeni Rial',
    symbol: '﷼'
  },
  {
    country: 'Zambia',
    isoCode: 'ZMW',
    name: 'Zambian Kwacha',
    symbol: 'ZK'
  },
  {
    country: 'Zimbabwe',
    isoCode: 'USD',
    name: 'United States Dollar',
    symbol: '$'
  }
]

export default currencyList;