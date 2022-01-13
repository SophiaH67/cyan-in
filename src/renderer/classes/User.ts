import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-initials-sprites';

export default class User {
  public name: string;

  public avatar: string;

  constructor(name: string) {
    this.name = name;
    this.avatar = createAvatar(style, {
      seed: this.name,
      dataUri: true,
    });
  }
}
