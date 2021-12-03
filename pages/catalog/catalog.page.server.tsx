export { onBeforeRender }

async function onBeforeRender() {
    return {
        pageContext: {
            pageProps: {
                header: {
                    menu: [
                        {
                            id: 1,
                            url: '/',
                            text: 'Home'
                        },
                        {
                            id: 2,
                            url: '/catalog',
                            text: 'Catalog'
                        },
                        {
                            id: 3,
                            url: '/contact',
                            text: 'Contact'
                        }
                    ],
                    src: '/images/atoms/Logo/LogoLight.svg',
                },
                footer: {
                    logo: '/images/atoms/Logo/LogoDark.svg',
                    menu: [
                        {
                            id: 1,
                            url: '/about-us',
                            text: 'О нас'
                        },
                        {
                            id: 2,
                            url: '/contacts',
                            text: 'Контакты'
                        },
                        {
                            id: 3,
                            url: '/help',
                            text: 'Помощь'
                        },
                        {
                            id: 4,
                            url: '/blog',
                            text: '(FIQ) Блог'
                        }
                    ],
                    infoMenu:   [
                        {
                            id: 1,
                            url: '/for-landlord',
                            text: 'Для арендодателей'
                        },
                        {
                            id: 2,
                            url: '/tenants',
                            text: 'Для съёмщиков'
                        },
                        {
                            id: 3,
                            url: '/protect-program',
                            text: 'Программа защиты'
                        },
                        {
                            id: 4,
                            url: '/oferta',
                            text: 'Публичная оферта'
                        },
                        {
                            id: 5,
                            url: '/support',
                            text: 'Служба поддержки'
                        }
                    ],
                    socials: [
                        {
                            id: 1,
                            url: 'http://test.com',
                            icon: 'fab instagram'
                        },
                        {
                            id: 2,
                            url: 'http://test.com',
                            icon: 'fab pinterest-p'
                        },
                        {
                            id: 3,
                            url: 'http://test.com',
                            icon: 'fab facebook-f'
                        },
                        {
                            id: 4,
                            url: 'http://test.com',
                            icon: 'fab twitter'
                        }
                    ]
                },
                catalog: Array(18).fill(0).map((e,i)=>({
                    id: i,
                    verified: true,
                    ready: true,
                    title: 'Confortable apartment',
                    sleepingPlaces: 56,
                    shower: 56,
                    dimensions: 56,
                    address: 'Metro Plaza Dr, Jersey City, NJ 07302, USA',
                    slug: `apartment-${i}`,
                    price: 500
                })),
            }
        }
    }
}
