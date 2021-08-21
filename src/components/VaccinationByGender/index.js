// Write your code here
import {PieChart, Pie, Legend, Cell} from 'recharts'
import {
  VaccinationByGenderContainer,
  VaccinationByGenderHeading,
} from './styledComponents'

const VaccinationByGender = props => {
  const {dataVaccinationByGender} = props
  return (
    <VaccinationByGenderContainer>
      <VaccinationByGenderHeading>
        Vaccination by gender
      </VaccinationByGenderHeading>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="40%"
          data={dataVaccinationByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="70%"
          dataKey="count"
          height="10%"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="bottom"
          align="center"
        />
      </PieChart>
    </VaccinationByGenderContainer>
  )
}

export default VaccinationByGender
