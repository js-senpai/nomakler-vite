export { onBeforeRender };

async function onBeforeRender() {
  let count = 1;
  return {
    pageContext: {
      pageProps: {
        header: {
          menu: [
            {
              id: 1,
              url: "/",
              text: "Home",
            },
            {
              id: 2,
              url: "/catalog",
              text: "Catalog",
            },
            {
              id: 3,
              url: "/contact",
              text: "Contact",
            },
          ],
          src: "/images/atoms/Logo/LogoLight.svg",
        },
        homeBanner: {
          img: "/images/organisms/Home/Banner/banner.jpg",
          title: "Discover Your New Home",
          description: "Helping 100 million renters find their perfect fit.",
        },
        advantages: [
          {
            id: 1,
            img: "/images/organisms/Home/Advantages/portfolio.svg",
            title: "Renting Made Simple",
            description:
              "Browse the highest quality listings, apply online, sign your lease, and even pay your rent from any device.",
          },
          {
            id: 2,
            img: "/images/organisms/Home/Advantages/search.svg",
            title: "Find Your Next Renter",
            description:
              "Connect with millions of renters and lease your property 100% online",
          },
          {
            id: 3,
            img: "/images/organisms/Home/Advantages/hand.svg",
            title: "Tips for Renters",
            description:
              "Tips for Renters Find answers to all of your renting questions with the best renter’s guide in the galaxy.",
          },
        ],
        apartments: Array(18)
          .fill(0)
          .map((e, i) => {
            if (count >= 1 && count < 6) {
              count++;
            } else {
              count = 1;
            }
            return {
              id: i,
              verified: true,
              ready: true,
              title: "Confortable apartment",
              sleepingPlaces: 56,
              shower: 56,
              dimensions: 56,
              address: "Metro Plaza Dr, Jersey City, NJ 07302, USA",
              slug: `/apartment/${i}`,
              price: 500,
              img: `/images/molecules/Catalog/Apartment/item-${count}.jpg`,
            };
          }),
        footer: {
          logo: "/images/atoms/Logo/LogoDark.svg",
          menu: [
            {
              id: 1,
              url: "/about-us",
              text: "О нас",
            },
            {
              id: 2,
              url: "/contacts",
              text: "Контакты",
            },
            {
              id: 3,
              url: "/help",
              text: "Помощь",
            },
            {
              id: 4,
              url: "/blog",
              text: "(FIQ) Блог",
            },
          ],
          infoMenu: [
            {
              id: 1,
              url: "/for-landlord",
              text: "Для арендодателей",
            },
            {
              id: 2,
              url: "/tenants",
              text: "Для съёмщиков",
            },
            {
              id: 3,
              url: "/protect-program",
              text: "Программа защиты",
            },
            {
              id: 4,
              url: "/oferta",
              text: "Публичная оферта",
            },
            {
              id: 5,
              url: "/support",
              text: "Служба поддержки",
            },
          ],
          socials: [
            {
              id: 1,
              url: "http://test.com",
              icon: "instagram",
            },
            {
              id: 2,
              url: "http://test.com",
              icon: "pinterest",
            },
            {
              id: 3,
              url: "http://test.com",
              icon: "facebook",
            },
            {
              id: 4,
              url: "http://test.com",
              icon: "twitter",
            },
          ],
        },
      },
    },
  };
}
