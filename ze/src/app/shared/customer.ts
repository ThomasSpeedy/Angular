export class Customer {
    constructor(
        public kundenNr: string,
        public name: string,
        public strasse: string,
        public plz: string,
        public ort: string,
        public ansprechPartner: string,
        ) {
    }
    assign(source: Customer) {
        this.kundenNr = source.kundenNr;
        this.name = source.name;
        this.strasse = source.strasse;
        this.plz = source.plz;
        this.ort = source.ort;
        this.ansprechPartner = source.ansprechPartner;
    }
}
