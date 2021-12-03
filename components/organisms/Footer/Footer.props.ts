

export interface FooterProps {
    footer: {
        logo: string,
        socials: {
            id: number | string
            url: string
            icon: string
        }[],
        menu: {
            id: number | string
            url: string
            text: string
        }[],
        infoMenu: {
            id: number | string
            url: string
            text: string
        }[],
    }
}
