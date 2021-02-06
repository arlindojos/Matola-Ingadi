import { events, Prisma } from '@prisma/client';

type Photos = string[]

export default {
  render(event: events) {
    const unknownPhotos = event.photos as unknown;
    const photos = unknownPhotos as Photos;

    return {
      id: event.id,
      title: event.title,
      description: event.description,
      photos: photos.map(photo => `${process.env.URL}/uploads/images/${photo}`),
      created_at: event.created_at,
      updated_at: event.updated_at
    };
  },

  renderMany(events: events[]) {
    return events.map(event => this.render(event));
  }
}