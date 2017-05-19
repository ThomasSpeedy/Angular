export class Worktime {
    constructor(
        public beginDate: Date,
        public beginTime: string,
        public endTime: string) {
    }
    assign(source: Worktime) {
        this.beginDate = source.beginDate;
        this.beginTime = source.beginTime;
        this.endTime = source.endTime;
    }
}
