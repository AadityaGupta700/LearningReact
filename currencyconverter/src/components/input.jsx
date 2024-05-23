import React from 'react'

function input({
  label,
  currency,
  options=[],
  amount, setAmount,
  convert,
  Currencychange,
  classname = {} }) {
    const currencySymbol = {
      'aed': 'د.إ',
      'afn': '؋',
      'all': 'L',
      'amd': '֏',
      'ang': 'ƒ',
      'aoa': 'Kz',
      'ars': '$',
      'aud': 'A$',
      'awg': 'ƒ',
      'azn': '₼',
      'bam': 'KM',
      'bbd': 'Bds$',
      'bdt': '৳',
      'bgn': 'лв',
      'bhd': '.د.ب',
      'bif': 'FBu',
      'bmd': 'BD$',
      'bnd': 'B$',
      'bob': 'Bs.',
      'brl': 'R$',
      'bsd': 'B$',
      'btn': 'Nu.',
      'bwp': 'P',
      'byn': 'Br',
      'bzd': 'BZ$',
      'cad': 'C$',
      'cdf': 'FC',
      'chf': 'CHF',
      'clp': '$',
      'cny': '¥',
      'cop': '$',
      'crc': '₡',
      'cup': '$MN',
      'cve': 'Esc',
      'czk': 'Kč',
      'djf': 'Fdj',
      'dkk': 'kr',
      'dop': 'RD$',
      'dzd': 'د.ج',
      'egp': '£',
      'ern': 'Nkf',
      'etb': 'Br',
      'eur': '€',
      'fjd': 'FJ$',
      'fkp': '£',
      'fok': 'kr',
      'gbp': '£',
      'gel': '₾',
      'ghs': 'GH₵',
      'gip': '£',
      'gmd': 'D',
      'gnf': 'FG',
      'gtq': 'Q',
      'gyd': 'G$',
      'hkd': 'HK$',
      'hnl': 'L',
      'hrk': 'kn',
      'htg': 'G',
      'huf': 'Ft',
      'idr': 'Rp',
      'ils': '₪',
      'inr': '₹',
      'iqd': 'ع.د',
      'irr': '﷼',
      'isk': 'kr',
      'jmd': 'J$',
      'jod': 'د.ا',
      'jpy': '¥',
      'kes': 'KSh',
      'kgs': 'лв',
      'khr': '៛',
      'kmf': 'CF',
      'kpw': '₩',
      'krw': '₩',
      'kwd': 'د.ك',
      'kyd': 'CI$',
      'kzt': '₸',
      'lak': '₭',
      'lbp': 'ل.ل',
      'lkr': 'Rs',
      'lrd': 'L$',
      'lsl': 'L',
      'lyd': 'ل.د',
      'mad': 'د.م.',
      'mdl': 'L',
      'mga': 'Ar',
      'mkd': 'ден',
      'mmk': 'K',
      'mnt': '₮',
      'mop': 'MOP$',
      'mru': 'UM',
      'mur': '₨',
      'mvr': 'Rf',
      'mwk': 'MK',
      'mxn': '$',
      'myr': 'RM',
      'mzn': 'MT',
      'nad': 'N$',
      'ngn': '₦',
      'nio': 'C$',
      'nok': 'kr',
      'npr': 'रू',
      'nzd': 'NZ$',
      'omr': 'ر.ع.',
      'pab': 'B/.',
      'pen': 'S/',
      'pgk': 'K',
      'php': '₱',
      'pkr': '₨',
      'pln': 'zł',
      'pyg': 'Gs',
      'qar': 'ر.ق',
      'ron': 'lei',
      'rsd': 'дин',
      'rub': '₽',
      'rwf': 'FRw',
      'sar': 'ر.س',
      'sbd': 'SI$',
      'scr': '₨',
      'sdg': 'ج.س.',
      'sek': 'kr',
      'sgd': 'S$',
      'shp': '£',
      'sll': 'Le',
      'sos': 'Sh',
      'srd': '$',
      'ssp': '£',
      'stn': 'Db',
      'syp': '£',
      'szl': 'E',
      'thb': '฿',
      'tjs': 'ЅМ',
      'tmt': 'm',
      'tnd': 'د.ت',
      'top': 'T$',
      'try': '₺',
      'ttd': 'TT$',
      'tvd': '$',
      'twd': 'NT$',
      'tzs': 'Sh',
      'uah': '₴',
      'ugx': 'USh',
      'usd': '$',
      'uyu': '$U',
      'uzs': 'сўм',
      'ves': 'Bs.',
      'vnd': '₫',
      'vuv': 'VT',
      'wst': 'T',
      'xaf': 'FCFA',
      'xcd': 'EC$',
      'xof': 'CFA',
      'xpf': '₣',
      'yer': '﷼',
      'zar': 'R',
      'zmw': 'ZK',
      'zwl': '$'
    };
    console.log(currencySymbol[currency])

    return (
    
    <div className='w-full h-full '>
      <div className='bg-white p-2 rounded-lg'>
        <div className='flex justify-between py-2'>

          <div className='text-gray-500 '>{label}</div>

          <div className='text-gray-500 '>Currency Type</div>
        </div>
        <div className='flex justify-between py-2'>
          <div className='text-black mt-2'>{currencySymbol[currency]}</div>
          <input type="number" placeholder={`Amount in ${currency} `}
            className=" text-blue-800 p-2 bg-white outline-none  rounded-xl"
            value={amount} 
            onChange={(e) =>{
              const newAmount = e.target.value === "" ? "" : Number(e.target.value);
              setAmount && setAmount(newAmount);
              convert(newAmount);
            }}  />

          <select value={currency}
            onChange={(e) => Currencychange && Currencychange(e.target.value)}
            className="text-blue-800  bg-white outline-none  rounded-xl">

            {options.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
            
          </select>
        </div>
      </div>
    </div>
  )
}

export default input