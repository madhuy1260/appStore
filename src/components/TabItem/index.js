// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeTab, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabStyle = isActive ? 'activeTab' : ''

  const onclickTabItem = () => {
    changeTab(tabId)
  }

  return (
    <li className="listItem">
      <button
        type="button"
        className={`button ${activeTabStyle}`}
        onClick={onclickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
