export interface IdentitasGuruType {
  status: string
  nama: string
  nip: string
  foto: string
}

export interface VisiType {
  visi: string
  point: Array<{
    id: number
    desc: string
  }>
}

export interface MisiType {
  misi: string
}