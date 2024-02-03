import { createRouter, createWebHistory } from 'vue-router';
import HeroView from '@/views/HeroView.vue';
import MenuView from '@/views/MenuView.vue';
import AboutUs from '@/views/AboutUs.vue';
import OurProduct from '@/views/OurProduct.vue';
import ContactUs from '@/views/ContactUs.vue';

const routes = [
  {
    path: '/',
    name: 'HeroView',
    component: HeroView,
    meta: {
      enterClass: 'animate__animated animate__zoomInRight',
      exitClass: 'animate__animated animate__zoomOutRight'
    }
  },
  {
    path: '/menu',
    component: MenuView,
    children: [
      {
        path: 'about',
        component: AboutUs,
        meta: {
          background: 'url("https://s3-alpha-sig.figma.com/img/897c/17d3/b98da54f0f75f798aa607a737d7f7ca4?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TiR~W23wRXlukWSL6RSaeLh7VsFaNguJOc4eETY9WE9HlYuQ-zKe1RecLntoFb-5KLdLaWjt3QW1AxXD~YrwMDy7hM~GsngS8UOGdF3~kbPgnqoViDuljp4y50kHv-dfpKOqPj4cl67JCXKTuyItRxZIU0xLIvLkh8qFqHt3oT2pvWsh8mRKSf0U1KG0xx2WDHlvIpLIrT5UGRMHyPLFo1Zxqej11xBeHB-pfgJGt~hoAwj9da6UuVO5xxVTBircbFf4R2SFvi-9MZamkCJb3n9S-yxj7FOiOwLj0tDT9dB-eJvAam4WETnXVW2xc0aLDXguYM5NIdtUk3tfFh8b8g__")',
          enterClass: 'animate__animated animate__slideInUp',
          exitClass: 'animate__animated animate__slideOutDown'
        }
      },
      {
        path: 'contact',
        component: ContactUs,
        meta: {
          background: 'url("https://s3-alpha-sig.figma.com/img/1719/e7c3/682625fa9074f9ac339574b883abcc90?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPjlnwVX1G0Vmq4BJBCEU4oevnnXpBkD3BXlTdKmxUWkH3w~pnR4nC9ER1HImaWQWWyTmfj3ef1qiu73~Y1uVUn9e1ODN4ks02h2HmJ3XHQgSELiMZQuYUdn9qLfmK9lp0Zz3XFgIe81qTHoF9PXs06nA7BqkYMpPgwfCGdV4qBIeREPyoOD4O9dQQlAgKOyt2EBieRyMgc4~l57bcz1J9fquU4zPDk35rRQoUGw7YFZMaJD~erxp1DexVSHKc20NZe7FRF6cnIEWKSReQ5i8X8VQn0KLwvytw99MmXrbjWCY0fvVKPHWhMsHLez1fWAUNF8yJtckm9xB5g0EdWxWw__")',
          enterClass: 'animate__animated animate__slideInUp',
          exitClass: 'animate__animated animate__slideOutDown'
        }
      },
      {
        path: 'product',
        component: OurProduct,
        meta: {
          background: 'url("https://s3-alpha-sig.figma.com/img/920b/75e2/a03de4dec8fdeebbabd73d723fc3f960?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McPlQI2fIORzyg4FUn1dCEQL7o91N0uos17REa0lLVsee7moc2Cs2LkLNtDYIc1W21DDpVFPYDKlWg8Na9GLeas7SxkY08JvXWoPemi5kCoORczkun1qYo-5TMwKoU9gqLq9GKNjHljrV5H-jMYAMRRLAkWtGwMzenGyfN19FDypUVJKLWFjkWQvN~xvxUTGdPLdVuEATRtrUefv9VniJm118fNaMnBzzLJ7~9YfZtjM4y1S~nEHDwtOJXWNBE9P5rd-woWxI2fI7lgvWonpBLGqLWLP9dam7kmlsBmiUe5SQVeYfPyrp~XttyiqwHoqP8xBA2dN1zBO0SnTOwSk9w__")',
          enterClass: 'animate__animated animate__slideInUp',
          exitClass: 'animate__animated animate__slideOutDown'
        }
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;