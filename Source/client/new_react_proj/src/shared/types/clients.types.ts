export type Client = {
    img: string,
    name: string,
    surname: string,
    recordingDate: string,
    recordingTime: string,
    status: 'Approved' | 'Need approve' | 'New' | 'Refused',
}