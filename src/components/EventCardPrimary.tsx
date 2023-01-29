import { PrimaryEventCardProps } from 'myTypes';

const EventCardPrimary:React.FC<PrimaryEventCardProps> = ({ eventImageUrl, isOnline}) => {
  return (
    <>
      <div className="relative max-w-sm rounded-lg overflow-hidden shadow-lg">
        {isOnline && 
          <div className="absolute w-20 h-6 top-2 right-0 pr-2 rounded">
            <div className=" text-white text-lg bg-gray-900 text-center">
              Online
            </div>
          </div>
        }  
        <img className="w-full" src={eventImageUrl} alt="Important event" />
        <div className="px-3 py-2 bg-gray-800">
          <div className="text-white text-lg">Friday, 7th Feb</div>
        </div>
      </div>
    </>
  )
}

export default EventCardPrimary