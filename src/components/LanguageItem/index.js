import './index.css'

const LanguageItem = props => {
  const {languageDetails, setActiveLanguageId, isActive} = props
  const {id, buttonText} = languageDetails
  const onClickLanguageButton = () => {
    setActiveLanguageId(id)
  }
  const active = isActive ? 'bgColor' : ''
  return (
    <li>
      <button
        className={`button ${active}`}
        type="button"
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default LanguageItem
