export const ChartData = () => {
    const result: string[] = [];

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const currentMonth = new Date().getMonth();

    getSixNumbers(currentMonth).map(number => (
        result.push(months[number])
    ))
    return result;
}

function getSixNumbers(index: number) {
  const numbers = [];
  for (let i = index - 5; i <= index; i++) {
    numbers.push((i < 0 ? i + 12 : i) % 12); // add the number, wrapping around at 12
  }
  numbers[index - (index - 5)] = index; // set the last number to be the index itself
  return numbers;
}

  