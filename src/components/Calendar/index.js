import "./Calendar.scss";

function Calendar({ text }) {
  return (
    <table>
      <th>
        <td className="top-left">1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td className="top-right">5</td>
      </th>
      <tr>
        <td>1.1</td>
        <td>2.1</td>
        <td>3.1</td>
        <td>4.1</td>
        <td>5.1</td>
      </tr>
      <tr>
        <td>1.2</td>
        <td>2.2</td>
        <td>3.2</td>
        <td>4.2</td>
        <td>5.2</td>
      </tr>
      <tr>
        <td>1.3</td>
        <td>2.3</td>
        <td>3.3</td>
        <td>4.3</td>
        <td>5.3</td>
      </tr>
      <tr>
        <td className="bottom-left">1.4</td>
        <td>2.4</td>
        <td>3.4</td>
        <td>4.4</td>
        <td className="bottom-right">5.4</td>
      </tr>
    </table>
  );
}

export default Calendar;
