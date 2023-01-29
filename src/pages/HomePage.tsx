import React from 'react'
import SocialEventCard from '../components/SocialEventCard'

type Props = {}

let date = new Date(1478708162000);

const event = {
  eventTitle: "A New Age Play",
  eventLocation: "Windsor Hall, University of Windsor",
  eventImageUrl: "https://i.pinimg.com/236x/0c/98/e7/0c98e77eca75c3ace2e93a27961912ee.jpg",
  eventDate: date,
  isOnline: true,
  redirectUrl: "",
  isSeries: true
}

function HomePage({}: Props) {
  return (
    <>
      <SocialEventCard event={event}  />
    </>
  )
}

export default HomePage