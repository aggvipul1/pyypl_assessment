let country = COUNTRY.toLowerCase()

let userData = {
    phoneNumber: '543499665',
    otp: '111111',
    passCode: '1111'
}
 let countryDetails = {
    uae : {
    currencyCode: 'AED',
    phonePrefixCode: '+971',
    phoneCountryCode: 'AE'
    }
}

output.userDetails = {
   userData: userData,
   countryDetails: countryDetails[country]
}
