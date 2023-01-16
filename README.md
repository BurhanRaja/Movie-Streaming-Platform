# Disney+ Hotstar Clone

## Description

#### What is project?
- This project is a clone of a very famous OTT platform in India. I have tried to create a very detailed clone of the platform. I have used Next.js for the developing the clone of this platform. I have used libraries like [SWR](https://swr.vercel.app/), [TailwindCss](https://tailwindcss.com/), [Swiperjs](https://swiperjs.com/) and [Sharp](https://www.npmjs.com/package/sharp). I have used [TMDB](https://www.themoviedb.org/) for getting data.

#### Reason to use certain technology
- In the project, I have used Next,js because of its ultimate feature, i.e., Server Side Rendering. And also I wanted to understand How Server Side Rendering as a concept. I used SWR library because to use client side for a certain situations like rendering an individual movie/show detail page at the user's demand (Will Improve). I used TailwindCss for styling. I used Swiperjs to create beautiful sliders as you might have seen on the top of the Homepage. I used Sharp because Nextjs recommended it to use for the Image Optimization😅.

#### The problems I faced
- I spend a lot of time exploring the API. It was hard to get the right endpoints for the API to get certian movies/shows. I faced challenges when rendering Images as they were contantly throwing errors. I faced problems in dynamic routing of the app as it was not possible to define the `ids` of all the movies and shows for in the app.

## Project Setup for Local Development

#### Clone the Repository

```
git clone https://github.com/BurhanRaja/Disney-Plus-hotstar-Clone.git
cd Disney-Plus-hotstar-Clone
```

#### Install Dependencies

```
npm install
```

#### Create your `.env` file and Set it up

```
NEXT_PUBLIC_URL=https://api.themoviedb.org/3/
NEXT_PULIC_API_KEY=your_api_key_from_tmdb
```

## Project Strucutre

```
components -|
            |- cards ----|- Card.js
            |            |- CardLoading.js
            |            |- CardSlider.js
            |                 
            |- movie ----|- MovieDetails.js
            |            |- MovieWatchCard.js
            |                 
            |- shows ----|- Episodes.js
            |            |- Seasons.js
            |            |- ShowDetails.js
            |            |- SimilarShows.js
            |            |- TvWatchCard.js
            |                 
            |- videoCard ----|- CardContainer.js
            |                |- VideoCard.js
            |                 
            |- ChannelHero.js
            |- Extras.js
            |- Footer.js
            |- Hero.js
            |- HeroLoading.js
            |- Layout.js
            |- Menu.js
            |- Navbar.js
            |- Search.js
            |- SwiperSlider.js
            
pages -|
       |- channel ----|- [slug].js
       |
       |- disney ----|- index.js
       |
       |- movies ----|- lang ----|- [lang].js
       |             |- [id].js
       |             
       |- shows ----|- genre ----|- [type].js
       |            |- seasons ----|- [showid].js ----|- [seasonid].js
       |            |- [id].js
       |            
       |- _app.js
       |- index.js
       |- search.js
       
public -|
        |- images/
        |- videos/
        |- logo.svg
        
services -|
          |- channel - API Logics for getting all Catgeories/Channels from disney+
          |- disney - API Logics for getting diney home
          |- fetchById - API Logic for individual movie/Show
          |- hotstar - API Logics for getting hotstar home
          |- genres.js
          
styles -|
        |- global.css
        
utils -|
       |- disney ----|- movieURL.js
                     |- tvURL.js
       |
       |- hostar ----|- movieURL.js
                     |- tvURL.js'
                     
.eslintrc.json
.gitignore
next.config.js
package-lock.json
package.json
post.config.css
tailwind.config.css
```

## Project Demo

to be continued....
