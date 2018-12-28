import {divide} from "./divide";
import {subtractByModule} from "./subtract";
import {multiply} from "./multiply";

export const mod = (first: string, second: string) => subtractByModule(first, multiply(divide(first, second), second));