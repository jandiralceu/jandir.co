import * as dayjs from 'dayjs'

export class DateTimeUtils {
  static isValidDate(date: string | Date | number): boolean {
    return dayjs(date).isValid()
  }

  static formatDate(
    date: string | Date | number,
    dateFormat = 'DD/MM/YYYY'
  ): string {
    return this.isValidDate(date) ? dayjs(date).format(dateFormat) : ''
  }
}
