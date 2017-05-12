export class Worktime {
    constructor(
        public beginDate: string,
        public beginTime: string,
        public endDate: string,
        public endTime: string) {
    }
    assign(source: Worktime) {
        this.beginDate = source.beginDate;
        this.beginTime = source.beginTime;
        this.endDate = source.endDate;
        this.endTime = source.endTime;
    }
}
