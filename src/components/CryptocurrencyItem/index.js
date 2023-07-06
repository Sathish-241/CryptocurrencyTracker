// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyData
  console.log(currencyData)

  return (
    <li className="table-row">
      <div className="coin-logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="usd-value">{usdValue}</p>
      <p className="euro-value">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
