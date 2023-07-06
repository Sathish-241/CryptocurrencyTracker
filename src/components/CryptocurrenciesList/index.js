import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {currencyList} = props

  return (
    <div className="list-container">
      <h1 className="main-heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="currency-image"
      />
      <div className="table-header">
        <p className="tale-column coin-type">Coin Type</p>
        <p className="table-column usd">Usd</p>
        <p className="table-column euro">Euro</p>
      </div>
      <ul className="table-container">
        {currencyList.map(eachItem => (
          <CryptocurrencyItem currencyData={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}
export default CryptocurrenciesList
