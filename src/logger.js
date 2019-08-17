export class Logger {
  /* LOG LEVELS:
   * 0: OFF
   * 1: INFO
   * 2: DEBUG
   * 3: TRACE
   */
  static level = 3;
  
  /* Log transport
   * Defaults to console.log
   */
  static log = console.log;

  static info(message) {
    if (Logger.level >= 1) {
      Logger.log(message);
    }
  }

  static debug(message) {
    if (Logger.level >= 2) {
      Logger.log(message);
    }
  }

  static trace(message) {
    if (Logger.level >= 3) {
      Logger.log(message);
    }
  }

}

