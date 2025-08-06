import Navbar from "./Navbar";
import favicon from "../assets/image/cloud-blender-render-logo.svg";
import github_logo from "../assets/image/github.svg";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="body">
        <title>Support Cloud Blender Render</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <Navbar />
      <div className="support-container">
        <div className="support-info">
          <div className="info-box">
            <div className="info-box-description">
              <p className="info-box-head">Be the top 0.1%</p>
              <p className="info-p p1">
                There are an estimated 2–4 million Blender users worldwide, yet
                less than 0.1% support the Blender Foundation. Open-source
                projects face similar challenges, many disappear due to a lack
                of funding.
              </p>
              <p className="info-p p2">
                Cloud Blender Render is a fully open-source project that lets
                you rent an RTX 5090 (a $3000 GPU) for under $1 per hour. It’s
                free to use, modify, and share but it still takes hundreds of
                hours of human effort to build, improve, and maintain.
              </p>
              <p className="info-p p3">
                Your support will help keep this project alive and thriving. It
                will allow me to actively maintain, add new features, and ensure
                you get the best rendering experience possible.
              </p>
              <p className="info-p p4">
                Every dollar counts. I deeply appreciate your support and the
                vote of confidence it represents. Now more than ever, please
                share this project with anyone who would benefit from it.
              </p>
              <a
                className="deploy-info-container"
                href="https://github.com/MeRahulAhire/Cloud-Blender-Render"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="deploy-info">
                  <div className="deploy-github-logo">
                    <img src={github_logo} alt="github logo" />
                  </div>
                  <span> Deployment instructions</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="support-form">
          <div className="support-form-box">
            <div className="form-head">Fill the details</div>
            <div className="currency-box form-sub-element">
             <p> Select the currency</p>
              <select name="currency">
                <option value="" disabled selected hidden>Euro, INR or USD</option>
                <option value="AFN">Afghan Afghani - AFN</option>
                <option value="ALL">Albanian Lek - ALL</option>
                <option value="DZD">Algerian Dinar - DZD</option>
                <option value="AOA">Angolan Kwanza - AOA</option>
                <option value="ARS">Argentine Peso - ARS</option>
                <option value="AMD">Armenian Dram - AMD</option>
                <option value="AWG">Aruban Florin - AWG</option>
                <option value="AUD">Australian Dollar - AUD</option>
                <option value="AZN">Azerbaijani Manat - AZN</option>
                <option value="BSD">Bahamian Dollar - BSD</option>
                <option value="BHD">Bahrain Dinar - BHD</option>
                <option value="BDT">Bangladesh Taka - BDT</option>
                <option value="BBD">Barbadian Dollar - BBD</option>
                <option value="BZD">Belize Dollar - BZD</option>
                <option value="BMD">Bermudian Dollar - BMD</option>
                <option value="BTN">Bhutanese Ngultrum - BTN</option>
                <option value="BOB">Bolivian Boliviano - BOB</option>
                <option value="BAM">Bosnia Convertible Mark - BAM</option>
                <option value="BWP">Botswana Pula - BWP</option>
                <option value="BRL">Brazilian Real - BRL</option>
                <option value="BND">Brunei Dollar - BND</option>
                <option value="BGN">Bulgarian Lev - BGN</option>
                <option value="BIF">Burundian Franc - BIF</option>
                <option value="KHR">Cambodian Riel - KHR</option>
                <option value="CAD">Canadian Dollar - CAD</option>
                <option value="CVE">Cape Verdean Escudo - CVE</option>
                <option value="KYD">Cayman Islands Dollar - KYD</option>
                <option value="XAF">Central African CFA Franc - XAF</option>
                <option value="XPF">CFP Franc - XPF</option>
                <option value="CLP">Chilean Peso - CLP</option>
                <option value="COP">Colombian Peso - COP</option>
                <option value="KMF">Comorian Franc - KMF</option>
                <option value="CDF">Congolese Franc - CDF</option>
                <option value="CRC">Costa Rican Colon - CRC</option>
                <option value="CZK">Czech Koruna - CZK</option>
                <option value="DKK">Danish Krone - DKK</option>
                <option value="DJF">Djiboutian Franc - DJF</option>
                <option value="DOP">Dominican Peso - DOP</option>
                <option value="XCD">East Caribbean Dollar - XCD</option>
                <option value="EGP">Egyptian Pound - EGP</option>
                <option value="ERN">Eritrean Nakfa - ERN</option>
                <option value="SZL">Eswatini Lilangeni - SZL</option>
                <option value="ETB">Ethiopian Birr - ETB</option>
                <option value="EUR">Euro - EUR</option>
                <option value="FKP">Falkland Islands Pound - FKP</option>
                <option value="FJD">Fijian Dollar - FJD</option>
                <option value="GMD">Gambian Dalasi - GMD</option>
                <option value="GEL">Georgian Lari - GEL</option>
                <option value="GHS">Ghanaian Cedi - GHS</option>
                <option value="GIP">Gibraltar Pound - GIP</option>
                <option value="GTQ">Guatemalan Quetzal - GTQ</option>
                <option value="GNF">Guinean Franc - GNF</option>
                <option value="GYD">Guyanese Dollar - GYD</option>
                <option value="HTG">Haitian Gourde - HTG</option>
                <option value="HNL">Honduran Lempira - HNL</option>
                <option value="HKD">Hong Kong Dollar - HKD</option>
                <option value="HUF">Hungarian Forint - HUF</option>
                <option value="ISK">Icelandic Krona - ISK</option>
                <option value="INR">Indian Rupee - INR</option>
                <option value="IDR">Indonesian Rupiah - IDR</option>
                <option value="IQD">Iraqi Dinar - IQD</option>
                <option value="JMD">Jamaican Dollar - JMD</option>
                <option value="JPY">Japanese Yen - JPY</option>
                <option value="JOD">Jordanian Dinar - JOD</option>
                <option value="KZT">Kazakhstani Tenge - KZT</option>
                <option value="KES">Kenya Shilling - KES</option>
                <option value="KWD">Kuwaiti Dinar - KWD</option>
                <option value="KGS">Kyrgyzstani Som - KGS</option>
                <option value="LAK">Lao Kip - LAK</option>
                <option value="LBP">Lebanese Pound - LBP</option>
                <option value="LRD">Liberian Dollar - LRD</option>
                <option value="LYD">Libyan Dinar - LYD</option>
                <option value="MOP">Macanese Pataca - MOP</option>
                <option value="MKD">Macedonian Denar - MKD</option>
                <option value="MGA">Malagasy Ariary - MGA</option>
                <option value="MWK">Malawian Kwacha - MWK</option>
                <option value="MYR">Malaysian Ringgit - MYR</option>
                <option value="MVR">Maldivian Rufiyaa - MVR</option>
                <option value="MRU">Mauritanian Ouguiya - MRU</option>
                <option value="MUR">Mauritius Rupee - MUR</option>
                <option value="MXN">Mexican Peso - MXN</option>
                <option value="MDL">Moldovan Leu - MDL</option>
                <option value="MNT">Mongolian Togrog - MNT</option>
                <option value="MAD">Moroccan Dirham - MAD</option>
                <option value="MZN">Mozambican Metical - MZN</option>
                <option value="NAD">Namibian Dollar - NAD</option>
                <option value="NPR">Nepalese Rupee - NPR</option>
                <option value="ILS">New Israeli Sheqel - ILS</option>
                <option value="TWD">New Taiwan Dollar - TWD</option>
                <option value="NZD">New Zealand Dollar - NZD</option>
                <option value="NIO">Nicaraguan Cordoba - NIO</option>
                <option value="NGN">Nigerian Naira - NGN</option>
                <option value="NOK">Norwegian Krone - NOK</option>
                <option value="PGK">Papua New Guinea Kina - PGK</option>
                <option value="PYG">Paraguayan Guarani - PYG</option>
                <option value="PEN">Peruvian Sol - PEN</option>
                <option value="PHP">Philippine Peso - PHP</option>
                <option value="PLN">Polish Zloty - PLN</option>
                <option value="GBP">Pound Sterling - GBP</option>
                <option value="QAR">Qatari Rial - QAR</option>
                <option value="CNY">Renminbi (Yuan) - CNY</option>
                <option value="OMR">Rial Omani - OMR</option>
                <option value="RON">Romanian Leu - RON</option>
                <option value="RUB">Russian Ruble - RUB</option>
                <option value="RWF">Rwandan Franc - RWF</option>
                <option value="SHP">Saint Helena Pound - SHP</option>
                <option value="WST">Samoan Tala - WST</option>
                <option value="SAR">Saudi Riyal - SAR</option>
                <option value="RSD">Serbian Dinar - RSD</option>
                <option value="SCR">Seychellois Rupee - SCR</option>
                <option value="SLL">Sierra Leonean Leone - SLL</option>
                <option value="SGD">Singapore Dollar - SGD</option>
                <option value="SBD">Solomon Islands Dollar - SBD</option>
                <option value="SOS">Somali Shilling - SOS</option>
                <option value="ZAR">South African Rand - ZAR</option>
                <option value="KRW">South Korean Won - KRW</option>
                <option value="LKR">Sri Lanka Rupee - LKR</option>
                <option value="SRD">Surinamese Dollar - SRD</option>
                <option value="SEK">Swedish Krona - SEK</option>
                <option value="CHF">Swiss Franc - CHF</option>
                <option value="TJS">Tajikistani Somoni - TJS</option>
                <option value="TZS">Tanzanian Shilling - TZS</option>
                <option value="THB">Thai Baht - THB</option>
                <option value="TOP">Tongan Paanga - TOP</option>
                <option value="TTD">Trinidad and Tobago Dollar - TTD</option>
                <option value="TND">Tunisian Dinar - TND</option>
                <option value="TRY">Turkish Lira - TRY</option>
                <option value="TMT">Turkmenistan Manat - TMT</option>
                <option value="AED">UAE Dirham - AED</option>
                <option value="UGX">Ugandan Shilling - UGX</option>
                <option value="UAH">Ukrainian Hryvnia - UAH</option>
                <option value="UYU">Uruguayan Peso - UYU</option>
                <option value="USD">US Dollar - USD</option>
                <option value="UZS">Uzbekistani Som - UZS</option>
                <option value="VUV">Vanuatu Vatu - VUV</option>
                <option value="VND">Vietnam Dong - VND</option>
                <option value="XOF">West African CFA Franc - XOF</option>
                <option value="YER">Yemeni Rial - YER</option>
                <option value="ZMW">Zambian Kwacha - ZMW</option>
              </select>
            </div>
            <div className="amount-box form-sub-element">
              <p>Enter the amount</p>
              <input type="number" name="" id=""  placeholder="100"/>
            </div>
            <div className="name form-sub-element">
              <p>Enter your name</p>
              <input type="text" placeholder="Prashant Singh" />
            </div>
            <div className="email form-sub-element">
              <p>Enter your email</p>
              <input type="text" placeholder="prashant@gmail.com" />
            </div>
            <div className="currency-box form-sub-element">
              <p>Enter your address</p>
              <textarea type="text" placeholder="Plot No. 12, Sector 18, Dwarka, New Delhi 110075"/>
            </div>
            <div className="disclaimer">
              <p className="disclaimer-p">By continuing, you acknowledge that it is non-refundable.</p>
            </div>
            <div className="submit-box">Support</div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
