export class AddressModel{
    constructor(
    public street:          string,
    public city:            string,
    public municipality:    string,
    public province:        string,
    public postcode:        string,
    public pnum:            string,
    public pchar:           string,
    public rd_x:            string,
    public rd_y:            string,
    public lat:             number,
    public lon:             number
    ){}  
}
