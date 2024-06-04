import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList';
import { withRoomConsumer} from '../context';
import Loading from './Loading'

function RoomsContainer({context}){
      const {loading, sortedRooms, rooms} = context;
      if (loading) {
                    return <Loading />;
                }
                           return (
                            <>               
                            <RoomsFilter rooms={rooms}/>
                            <RoomsList rooms={sortedRooms} />
                        </>
                           );
                        }
                    


export default withRoomConsumer(RoomsContainer);


// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import RoomsList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './loading'



// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//                {(value) => {
//                    const {loading, sortedRooms, rooms} = value
//         if(loading){
//             return <Loading />;
//         }
//                    return (
//                     <div>
//                         hello room RoomContainer
//                     <RoomsFilter rooms={rooms}/>
//                     <RoomsList rooms={sortedRooms} />
//                 </div>
//                    );
//                 }}

//         </RoomConsumer> 
//     );
// }
