import React, { useEffect, useState } from 'react'
import client from './client'
import Card from './Card'

export default function TopTeams() {

  const [teamData, setTeamlData] = useState([])

  const fetchTeamsDetails = async () => {
    const response = await client.getEntries({ content_type: 'footballnews' })
    response.items.map((slide) => {
      const { fields } = slide
      const slideTitle = fields.title
      const slideRoster = fields.roster
      const slideRating = fields.rating

      const obj = { slideTitle, slideRoster, slideRating }
      setTeamlData(old => [...old, obj])
    })
  }

  useEffect(() => {
    fetchTeamsDetails()
  })
  return (
    <div>
      {teamData.map(el => <Card flag={1} title={el.slideTitle} rating={el.slideRating} roster={el.slideRoster} />)}
    </div>
  )
}
