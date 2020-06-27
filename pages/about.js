import Layout from "hoc/Layout.component";

const data = [
  { 
    id: 1,
    title: 'Server Side Rendering',
    src: '/svg/new-tab.svg'  ,
    alt: 'server side rendering'
  },
  { 
    id: 2,
    title: 'Progressive Web App',
    src: '/svg/power.svg',
    alt: 'pwa',
  },
  { 
    id: 3,
    title: 'Next SEO',
    src: '/svg/drivers-license-o.svg' ,
    alt: 'next-seo'
  },
  { 
    id: 4,
    title: 'Automatic Code Splinting',
    src: '/svg/codepen.svg',
    alt: 'automatic code splinting'
  },
  { 
    id: 5,
    title: 'Styled Components',
    src: '/svg/styled-components.svg',
    alt: 'styled components'
  },
  { 
    id: 6,
    title: 'Tailwindcss',
    src: '/svg/tailwindcss.svg',
    alt: 'tailwindcss'
  },
]

const About = () => (
  <Layout
    title='Hacker News Next'
    description='Hacker News clone made with Next.js'
  >
    <div className='min-h-screen flex items-center -m-16'>

      <div class="py-20 px-10 bg-white rounded-sm shadow-lg">
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:text-center">
            <p class="text-base leading-6 text-orange font-semibold tracking-wide uppercase">Next js</p>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">Hacker News Clone </h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.</p>
        </div>

        <div class="mt-10">
          <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            { data.map(d => (
              <li key={d.id}>
                <div class="flex">
                  <div class="flex-shrink-0">
                      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-orange text-white">
                        <img src={d.src} alt={d.alt} />
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">{d.title}</h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</p>
                  </div>
                </div>
              </li>
             ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About