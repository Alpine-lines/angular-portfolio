import { NGXLoggerMonitor, NGXLogInterface } from 'ngx-logger';

export class LoggerMonitor implements NGXLoggerMonitor {
  onLog(log: NGXLogInterface) {
    console.log("JDDEV:");
  }
}
