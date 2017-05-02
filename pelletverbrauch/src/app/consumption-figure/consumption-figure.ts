export class ConsumptionFigure {

    constructor(
        public date: string,
        public time: string,
        public operationHours: number,
        public starts: number,
        public consumption: number) {
    }
}
