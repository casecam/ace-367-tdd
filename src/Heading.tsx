import * as React from 'react'
interface IHeadingProps {
  // ? needed for recipient's default prop value in the component
  recipient?: string
}

const Heading: React.FC<IHeadingProps> = ({ recipient = 'React'}) => <h1>Hello {recipient}</h1>
export default Heading
