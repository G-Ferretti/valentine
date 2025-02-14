import {MoveDirection, OutMode} from '@tsparticles/engine';

export const heartEmitter = {
  fpsLimit: 120,
  particles: {
    number: {
      value: 30
    },
    shape: {
      type: 'heart',
    },
    color: {
      value: '#d90429'
    },
    size: { value: 5, random: true },
    move: {
      enable: true,
      speed: 5,
      direction: MoveDirection.top,
      outModes: OutMode.out
    }
  },
  emitters: {
    direction: MoveDirection.top,
    life: { duration: 5, count: 1 },
    rate: { quantity: 5, delay: 0.5 },
    size: { width: 100, height: 0 },
    position: { x: 50, y: 100 }
  },
};
