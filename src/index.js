import ms from 'ms';

export default function secs(...args) {
  return Math.round(ms(...args) / 1000);
}
