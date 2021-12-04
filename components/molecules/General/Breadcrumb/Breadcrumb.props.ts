export interface BreadcrumbProps {
    navigation: {
        id: number | string
        name: string
        url: string
    }[]
    className?: string
}
