export interface IdentityGtkType {
  status: string
  name: string
  nip: string
  photo: string
  total_student?: {
    male: number
    female: number
  }
}
