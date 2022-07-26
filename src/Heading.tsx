import * as React from 'react'
interface IHeadingProps {
  recipient?: string
}

const Heading = ({ recipient = 'React'}: IHeadingProps) => <h1>Hello {recipient}</h1>
export default Heading
