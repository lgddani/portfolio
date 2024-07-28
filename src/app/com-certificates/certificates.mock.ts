export const certificatesList: Certificate[] = [
    {
        img: '../../assets/img/certificado1.jpg',
        alt: 'Certificado Udemy',
        title: 'Backend'
    },
    {
        img: '../../assets/img/certificado2.jpg',
        alt: 'Certificado Udemy',
        title: 'Fronted'
    },
    {
        img: '../../assets/img/certificado3.jpg',
        alt: 'Certificado Udemy',
        title: 'Marketing'
    },
    {
        img: '../../assets/img/certificado4.jpg',
        alt: 'Certificado Udemy',
        title: 'Backend'
    },
    {
        img: '../../assets/img/certificado5.jpg',
        alt: 'Certificado Google',
        title: 'Fronted'
    },
    {
        img: '../../assets/img/certificado6.jpg',
        alt: 'Certificado Google',
        title: 'Fronted'
    },
    {
        img: '../../assets/img/certificado7.jpg',
        alt: 'Certificado Google',
        title: 'Fronted'
    },
    {
        img: '../../assets/img/certificado8.jpg',
        alt: 'Certificado Google',
        title: 'Backend'
    }
]

export interface Certificate {
  img: String;
  alt: String;
  title: String;
}