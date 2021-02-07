import { events_photos, events } from '@prisma/client';

export interface eventHistory {
  id: number,
  title: string,
  description: string,
  event: events,
  photos: events_photos[],
  created_at: Date
}

export default {
  render(eventHistory: eventHistory) {
    return {
      id: eventHistory.id,
      eventType: eventHistory.event.type,
      title: eventHistory.title,
      description: eventHistory.description,
      photos: accessoriesPhotos(eventHistory.photos),
      createdAt: eventHistory.created_at
    };
  },

  renderMany(eventHistories: eventHistory[]) {
    return eventHistories.map(eventHistory => this.render(eventHistory));
  }
}

const accessoriesPhotos = (photos: events_photos[]) => {
  const paths =  photos.map(photo => {
    return {
      id: photo.id,
      path: `${process.env.URL}/uploads/images/${photo.path}`
    }
  })
  
  return paths
}