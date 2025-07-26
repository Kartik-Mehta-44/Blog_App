'use client'

import React, { useEffect, useState } from 'react'
import './subscriptions.css'
import SubsTableItem from '@/components/AdminComponents/SubsTableItem'
import axios from 'axios'
import { toast } from 'react-toastify'

const page = () => {
  const [emails, setEmails] = useState([])

  const fetchEmails = async () => {
    const { data } = await axios.get('/api/email')
    setEmails(data.emails)
  }

  const deleteEmail = async (id) => {
    try {
      // interpolate id in URL so Next sees ?id=...
      const { data } = await axios.delete(`/api/email?id=${id}`)
      if (data.success) {
        toast.success(data.msg)
        fetchEmails()
      } else {
        toast.error(data.error || 'Delete failed')
      }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Network error')
    }
  }

  useEffect(() => {
    fetchEmails()
  }, [])

  return (
    <div className="subscriptions-container">
      <h1 className="subscriptions-heading">All Subscriptions</h1>
      <div className="subscriptions-table-wrapper">
        <table className="subscriptions-table">
          <thead className="subscriptions-thead">
            <tr>
              <th className="subscriptions-th">Email Subscription</th>
              <th className="subscriptions-th subscriptions-th--date">
                Date
              </th>
              <th className="subscriptions-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {emails.map((item) => (
              <SubsTableItem
                key={item._id}
                id={item._id}
                email={item.email}
                date={item.date}
                deleteEmail={deleteEmail}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page
