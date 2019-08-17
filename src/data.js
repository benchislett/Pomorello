import { Logger } from "./logger.js"

export class State{
  constructor(refresh = 10) {
    Logger.trace(`Constructing new card with refresh ${refresh}`);
    this.is_active = false;
    this.is_break = false;
    this.start_ms = 0;
    this.set_length = 1000 * 60 * 25;
    this.break_length = 1000 * 60 * 5;
    this.set_hist = {};
    this.name = "?";

    this.refresh = refresh;
  }

  async fetch(t) {
    Logger.trace("Fetching data");
    const name_p = t.card("name");
    let data = await t.getAll();
    data = data.card.shared || {};
    Logger.trace("Got data");

    this.is_active = data.POMORELLO_ACTIVE || this.is_active;
    this.is_break = data.POMORELLO_BREAK || this.is_break;
    this.start_ms = data.POMORELLO_START || this.start_ms;
    this.set_length = data.POMORELLO_SET_LENGTH || this.set_length;
    this.break_length = data.POMORELLO_BREAK_LENGTH || this.break_length;
    this.set_hist = data.POMORELLO_SET_HISTORY || this.set_hist;
    this.name = (await name_p).name;

    Logger.info(JSON.stringify(this, null, 2));
  }

  async sync(t) {
    Logger.trace(`Syncing card ${this.name}`);
    return t.set("card", "shared", {
      POMORELLO_ACTIVE: this.is_active,
      POMORELLO_BREAK: this.is_break,
      POMORELLO_START: this.start_ms,
      POMORELLO_SET_LENGTH: this.set_length,
      POMORELLO_BREAK_LENGTH: this.break_length,
      POMORELLO_SET_HISTORY: this.set_hist
      // Name should be read-only
    });
  }

  age() {
    const age = Date.now() - this.start_ms;
    Logger.trace(`Computing age for card ${this.name}: ${age}`);
    return age;
  }

  timeStr() {
    Logger.trace(`Formatting time for card ${this.name}`);
    let length;

    if (this.is_active) {
      length = this.set_length;
    } else if (this.is_break) {
      length = this.break_length;
    }

    const time_ms = length - this.age();
    let time_s = Math.floor(time_ms / 1000);
    if (this.refresh) {
      time_s = this.refresh * Math.ceil(time_s / this.refresh);
    }
    Logger.trace(`Formatting time for card ${this.name}: ${time_s} seconds`);

    const mins = Math.floor(time_s / 60) % 60;
    const mins_str = mins.toFixed(0).padStart(2, "0");

    const secs = time_s % 60;
    const secs_str = secs.toFixed(0).padStart(2, "0");

    return `${mins_str}:${secs_str}`;
  }

  addSet() {
    Logger.trace(`Incrementing history of completed set for card ${this.name}`);
    const prev = this.set_hist[this.set_length] || 0;
    this.set_hist[this.set_length] = prev + 1;
  }
}

