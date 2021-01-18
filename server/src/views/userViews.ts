import { Users } from '@prisma/client';

export default {
  render(user: Users) {
    return {
      id: user.id,
      name: user.name,
      phone: user.phone,
      email: user.email,
    };
  },

  renderMany(users: Users[]) {
    return users.map(user => this.render(user));
  }
}