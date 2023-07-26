import React, { useEffect, useState } from 'react'
import Card from './Card'
import client from './client'




export default function History() {

  const [footballData, setFootballData] = useState([])
  const fetchFootballDetails = async () => {


    const response = await client.getEntries({ content_type: 'footballnews' })
    response.items.map((slide) => {
      const { fields } = slide
      const slideTitle = fields.title
      const slideDesc = fields.desc
      const slideBg = fields.img.fields.file.url

      const obj = { slideTitle, slideDesc, slideBg }
      setFootballData(old => [...old, obj])
    })
  }

  useEffect(() => {
    fetchFootballDetails()
  })

  return (
    <div>
      {footballData.map(el => <Card flag={0} title={el.slideTitle} imgUrl={el.slideBg} article={el.desc} />)}
    </div>
  )
}

/**
 * title
 * image
 * description 
 */

