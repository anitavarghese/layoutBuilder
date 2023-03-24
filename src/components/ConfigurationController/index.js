// Write your code here
import './index.css'

const ConfigurationController = () => (
  <nav className="configuration-controller-container">
    <h1 className="layout-heading">Layout</h1>
    <input type="checkbox" id="content" />
    <label htmlFor="content">Content</label>
    <input type="checkbox" id="leftnavbar" />
    <label htmlFor="leftnavbar">Left NavBar</label>
    <input type="checkbox" id="rightnavbar" />
    <label htmlFor="leftnavbar">Right NavBar</label>
  </nav>
)

export default ConfigurationController
