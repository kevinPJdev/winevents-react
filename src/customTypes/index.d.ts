declare module 'myTypes' {
  type EventType = {
    eventTitle: string,
    eventLocation: string,
    eventImageUrl: string,
    eventDate: Date,
    isOnline: boolean,
    redirectUrl: string,
    isSeries: boolean 
  }
  interface EventProps {
    event: EventType
  }

  interface PrimaryEventCardProps {
    eventImageUrl: string,
    isOnline: boolean,
  }
}

module.exports = {
  EventType,
  EventProps,
};