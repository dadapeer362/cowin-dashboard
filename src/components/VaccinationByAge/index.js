// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import {
  VaccinationByAgeContainer,
  VaccinationByAgeHeading,
} from './styledComponents'

const VaccinationByAge = props => {
  const {dataVaccinationByAge} = props
  return (
    <VaccinationByAgeContainer>
      <VaccinationByAgeHeading>Vaccination by age</VaccinationByAgeHeading>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={dataVaccinationByAge}
          startAngle={0}
          endAngle={360}
          outerRadius="70%"
          dataKey="count"
          height="10%"
        >
          <Cell name="13-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </VaccinationByAgeContainer>
  )
}

export default VaccinationByAge
