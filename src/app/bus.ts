
export class Bus{
    busid: any
    busPlate: string =''
    seatType: string = ''
    aC: string = ''
    sourceLocation: string = ''
    destinationLocation: string = ''
    startTime: Date = new Date
    duration: string = ''
    seatFactorFare: number= 0;
    acFactorFare: number= 0;
    Halts: any
}