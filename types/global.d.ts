import { Revieve } from "./revieve";

declare global {
  interface Window {
    Revieve: Revieve;
  }
}
