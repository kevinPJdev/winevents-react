import EventCardPrimary from './EventCardPrimary'

import { EventProps } from 'myTypes'

const SocialEventCard: React.FC<EventProps> = ({ event }) => {
  return (
    <div>
      <EventCardPrimary eventImageUrl={event.eventImageUrl} isOnline={event.isOnline} />
      <div className="py-3">
        <div className="text-3xl font-bold pb-1">{event.eventTitle}</div>
        <div className="text-base text-gray-500">{event.eventLocation}</div>
      </div>
    </div>
  )
}

export default SocialEventCard