import { faker } from "@faker-js/faker";

export default function Button() {
  return <button>Button {faker.string.uuid()}</button>;
}
