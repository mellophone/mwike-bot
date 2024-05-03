import { Command } from "../interfaces/Command";
import { ping } from "../commands/ping";
import { setStatus } from "../commands/set-status";

export const CommandList: Command[] = [ping, setStatus];
