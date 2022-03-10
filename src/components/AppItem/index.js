// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl} = appDetails

  return (
    <li className="listItem">
      <img src={imageUrl} alt={appName} className="image" />
      <p className="appName">{appName}</p>
    </li>
  )
}
export default AppItem
