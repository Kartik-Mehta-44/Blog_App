import React from 'react'
import './SubsTableItem.css'

const SubsTableItem = ({ email, id, date, deleteEmail }) => {
  const emailDate = new Date(date)

  return (
    <tr className="subs-row">
      <th scope="row" className="subs-cell subs-cell--email">
        {email || 'No Email'}
      </th>
      <td className="subs-cell subs-cell--date">
        {emailDate.toDateString()}
      </td>
      <td
        className="subs-cell subs-cell--action"
        onClick={() => deleteEmail(id)}
      >
        x
      </td>
    </tr>
  )
}

export default SubsTableItem
