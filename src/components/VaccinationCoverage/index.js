// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import {
  VaccinationCoverageContainer,
  VaccinationCoverageHeading,
} from './styledComponents'

const VaccinationCoverage = props => {
  const {dataVaccinationCoverage} = props

  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <VaccinationCoverageContainer>
      <VaccinationCoverageHeading>
        Vaccination Coverage
      </VaccinationCoverageHeading>
      <BarChart
        width={1000}
        height={300}
        data={dataVaccinationCoverage}
        margin={{
          top: 5,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={DataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose1" fill="#1f77b4" barSize="30%" />
        <Bar dataKey="dose2" name="Dose2" fill="#f54394" barSize="30%" />
      </BarChart>
    </VaccinationCoverageContainer>
  )
}

export default VaccinationCoverage
