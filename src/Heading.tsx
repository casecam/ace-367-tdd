import * as React from 'react'
interface IHeadingProps {
  recipient: string
}

const Heading: React.FC<IHeadingProps> = (props) => <h1>Hello {props.recipient}</h1>
export default Heading
