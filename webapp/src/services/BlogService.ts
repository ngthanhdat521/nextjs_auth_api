import moment from 'moment';

export class BlogService {
  static readonly CREATED_DATE_FORMAT = 'MMM DD, YYYY';
  static readonly CREATED_DATE_STANDARD_FORMAT = 'YYYY-MM-DD';

  static formatCreatedDate(date: Date) {
    return moment(date).format(BlogService.CREATED_DATE_FORMAT);
  }

  static formatStandardCreatedDate(date: Date) {
    return moment(date).format(BlogService.CREATED_DATE_STANDARD_FORMAT);
  }
}
