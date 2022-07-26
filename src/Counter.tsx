interface ICounterProps {
  label?: string
  count: number
  onCounterIncrease: (isShift: boolean) => void
}

const Counter = (
  {label = 'Count', count, onCounterIncrease}: ICounterProps
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      onCounterIncrease(event.shiftKey)
    }
    return (
      <div
        data-testid="counter"
        className="counter"
        onClick={handleClick}
      >
        <label>{label}</label>
        <span>{count}</span>
      </div>
    )
}

export default Counter