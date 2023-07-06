import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class CryptocurrencyTracker extends Component {
  state = {
    currencyList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptocurrencyList()
  }

  getCryptocurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedList = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))

    this.setState({
      currencyList: updatedList,
      isLoading: false,
    })
  }

  render() {
    const {currencyList, isLoading} = this.state

    return (
      <div className="tracker-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="rings" height={50} width={50} />
          </div>
        ) : (
          <CryptocurrenciesList currencyList={currencyList} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker
