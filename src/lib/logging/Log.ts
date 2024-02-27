const GLOB = '|#|'
const DEBUG = '🐞'.concat(GLOB).concat('DBG:')
const WARN = '⚠️'.concat(GLOB).concat('WRN:')
const ERROR = '⛔'.concat(GLOB).concat('ERR:')
const INFO = 'ℹ️'.concat(GLOB).concat('INF:')
const LOG = '📓'.concat(GLOB).concat(':')
const TRACE = '🔳'.concat(GLOB).concat(':')

const logLevel: { [key: string]: number } = {
  trace: 0,
  debug: 1,
  info: 2,
  log: 3,
  warn: 4,
  error: 5,
}

const logHeader: { [key: string]: string } = {
  trace: '🔳'.concat(GLOB).concat(':'),
  debug: '🐞'.concat(GLOB).concat('DBG:'),
  info: 'ℹ️'.concat(GLOB).concat('INF:'),
  log: '📓'.concat(GLOB).concat(':'),
  warn: '⚠️'.concat(GLOB).concat('WRN:'),
  error: '⛔'.concat(GLOB).concat('ERR:'),
}

const logStyle: { [key: string]: string[] } = {
  trace: [
    'color: #666; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
    'color: #666; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
  ],
  debug: [
    'color: #666; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
    'color: #666; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
  ],
  info: [
    'color: #666; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
    'color: #666; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
  ],
  log: [
    'color: #666; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
    'color: #666; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
  ],
  warn: [
    'color: #666; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
    'color: #666; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
  ],
  error: [
    'color: #666; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
    'color: #666; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
  ],
}

interface LogInterface {
  location: string
  debug(msg: string, ...details: any[]): void
  warn(msg: string, ...details: any[]): void
  error(msg: string, ...details: any[]): void
  info(msg: string, ...details: any[]): void
  log(msg: string, ...details: any[]): void
}

export default class Log implements LogInterface {
  location = ''

  private visible = (loglevel: number) => {
    const storedLogLevel = 0
    return loglevel >= storedLogLevel
  }

  constructor(location: string = '') {
    this.location = location
  }

  public trace(msg: string, ...details: any[]): void {
    if (this.visible(logLevel.trace))
      console.groupCollapsed(
        '%c' +
          TRACE +
          (this.location ? ' ' + this.location + ' ' : '') +
          ('%c| ' + msg),
        logStyle.trace[0],
        logStyle.trace[1]
      )
    console.log(msg, '+')
    console.groupEnd()
  }

  public debug(msg: string, ...details: any[]): void {
    if (this.visible(logLevel.debug))
      console.groupCollapsed(
        '%c' +
          DEBUG +
          (this.location ? ' ' + this.location + ' ' : '') +
          ('%c| ' + msg),
        'color: #6495ED; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
        'color: #6495ED; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);'
      )
    console.debug(msg)
    console.groupEnd()
  }

  public info(msg: string, ...details: any[]): void {
    if (this.visible(logLevel.info))
      console.groupCollapsed(
        '%c' +
          INFO +
          (this.location ? ' ' + this.location + ' ' : '') +
          ('%c| ' + msg),
        'color: cyan; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
        'color: cyan; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);'
      )
    console.error(msg, '+')
    console.groupEnd()
  }

  public log(msg: string, ...details: any[]): void {
    if (this.visible(logLevel.log))
      console.groupCollapsed(
        '%c' +
          LOG +
          (this.location ? ' ' + this.location + ' ' : '') +
          ('%c| ' + msg),
        'color: #888; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
        'color: #888; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);'
      )
    console.log(msg, '+')
    console.groupEnd()
  }

  public warn(msg: string, ...details: any[]): void {
    if (this.visible(logLevel.warn))
      console.groupCollapsed(
        '%c' +
          WARN +
          (this.location ? ' ' + this.location + ' ' : '') +
          ('%c| ' + msg),
        'color: yellow; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
        'color: yellow; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);'
      )
    console.warn('%c *** ' + msg + ' ... ' + details, details)

    console.groupEnd()
  }
  public error(msg: string, ...details: any[]): void {
    if (this.visible(logLevel.error))
      console.groupCollapsed(
        '%c' +
          ERROR +
          (this.location ? ' ' + this.location + ' ' : '') +
          ('%c| ' + msg),
        'color:red; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);',
        'color:red; font-weight: lighter; text-shadow: 1px 1px 0px rgba(0 0 0 / 0.6);'
      )
    console.error(msg, '+')
    console.groupEnd()
  }
}
