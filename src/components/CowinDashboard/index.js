// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import {
  CowinDashboardContainer,
  LogoContainer,
  LogoImg,
  LogoImgTextContainer,
  LogoText,
  CowinDashBoardHeading,
  ChartsContainer,
  LoaderContainer,
  ImageFailureContainer,
  ImageFailureView,
  FailureText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const cowinLogo = 'https://assets.ccbp.in/frontend/react-js/cowin-logo.png'

const imgFailureView =
  'https://assets.ccbp.in/frontend/react-js/api-failure-view.png'

class CowinDashboard extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    vaccinationData: {},
  }

  componentDidMount() {
    this.onGetCovidVaccinationData()
  }

  onGetCovidVaccinationData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const covidVaccinationDataApiUrl =
      'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(covidVaccinationDataApiUrl)

    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        last7DaysVaccination: fetchedData.last_7_days_vaccination.map(
          eachDayData => ({
            vaccineDate: eachDayData.vaccine_date,
            dose1: eachDayData.dose_1,
            dose2: eachDayData.dose_2,
          }),
        ),
        vaccinationByAge: fetchedData.vaccination_by_age.map(range => ({
          age: range.age,
          count: range.count,
        })),
        vaccinationByGender: fetchedData.vaccination_by_gender.map(
          genderType => ({
            gender: genderType.gender,
            count: genderType.count,
          }),
        ),
      }
      this.setState({
        vaccinationData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  onGetLogoItems = () => (
    <LogoContainer>
      <LogoImgTextContainer>
        <LogoImg src={cowinLogo} alt="website logo" />
      </LogoImgTextContainer>
      <LogoImgTextContainer>
        <LogoText>Co-WIN</LogoText>
      </LogoImgTextContainer>
    </LogoContainer>
  )

  onGetLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </LoaderContainer>
  )

  onGetChartsItems = () => {
    const {vaccinationData} = this.state
    return (
      <ChartsContainer>
        <VaccinationCoverage
          dataVaccinationCoverage={vaccinationData.last7DaysVaccination}
        />
        <VaccinationByGender
          dataVaccinationByGender={vaccinationData.vaccinationByGender}
        />
        <VaccinationByAge
          dataVaccinationByAge={vaccinationData.vaccinationByAge}
        />
      </ChartsContainer>
    )
  }

  onGetFailureView = () => (
    <ImageFailureContainer>
      <ImageFailureView src={imgFailureView} alt="failure view" />
      <FailureText>Something went wrong</FailureText>
    </ImageFailureContainer>
  )

  onGetResult = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onGetLoader()
      case apiStatusConstants.success:
        return this.onGetChartsItems()
      case apiStatusConstants.failure:
        return this.onGetFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <CowinDashboardContainer>
        {this.onGetLogoItems()}
        <CowinDashBoardHeading>
          CoWIN Vaccination in India
        </CowinDashBoardHeading>
        {this.onGetResult()}
      </CowinDashboardContainer>
    )
  }
}

export default CowinDashboard
