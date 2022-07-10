# Dynamic Cosmic CMS with authentication built using Next JS 12+, Tailwind CSS 3, MongoDB, Cosmicjs CMS and TypeScript )

### DEMO
<a href="https://tailwind-nextjs-cosmicjs-cms-with-mongodb-user-authentication.vercel.app/">Vercel Link</a>

#Features Implemented
- Dynamic content (hero video, 4 news tiles, news detail page) from cosmicjs (decoupled/headless cms)
- Registration & Login using JWT, MongoDB Atlas (cloud) 

### Tech Stack
- Next.js
- Tailwind CSS
- PostCSS
- TypeScript
- ESLint
- Prettier
- Husky 
- mongoose
- jwt authentication
- cryptojs
- mongodb-atlas
- Nookies

- MongoDB Atlas 
- Cosmic JS (headless/cloud CMS API)





### Features

- Dynamic content from Cosmis JS (Featured Hero video and News articles)
- MongoDB based JWT authentication






### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

Open http://localhost:3000 with your favorite browser to see your project. For your information, Next JS need to take some time to compile the project for your first time.

```
.
├── README.md            # README file
├── next.config.js       # Next JS configuration
├── public               # Public folder
│   └── assets
│       └── images       # Image used by default template
├── src
│   ├── components       # Atomic components
│   ├── lib              # Lib files for api, auth etc
│   ├── models           # Data Schema
│   ├── Store            # State Management (optional)
│   ├── layout           # Atomic layout component
│   ├── pages            # Next JS pages
│   ├── styles           # PostCSS style folder with Tailwind
│   ├── templates        # Default template
│   └── utils            # Utility folder
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

### Customization

You can easily configure the theme. Please change the following file:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-16x16.png` and `public/favicon-32x32.png`: your favicon, you can generate from https://favicon.io/favicon-converter/
- `src/styles/global.css`: your CSS file using Tailwind CSS
- `utils/AppConfig.ts`: configuration file
- `src/pages/index.tsx`: the index page of the theme that uses the `Base` component
- `src/template/Base.tsx`: the `Base` component using component blocks
- `src/templates/*`: the list of component blocks
- `src/*`: other folders in src are the atomic components used by components blocks

### Important setting env file with Cosmic CMS details, JWToken & Atlas MongoDB
- You need to create .env.local file and add these details from Cosmic JS
  
```
COSMIC_BUCKET_SLUG=
COSMIC_READ_KEY=
COSMIC_PREVIEW_SECRET=
JWT_SECRET_KEY=
MONGODB_URI=

```
Here is the layer:

- the entry point: `index.tsx` in `src/pages`
- the `Base` template: `Base.tsx` in `src/templates`
- use component blocks from `src/templates/*`
- use atomic components from `src/*`

### Deploy to production

You can see the results locally in production mode with:

```
$ npm run build
$ npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

You can create an optimized production build with:

```
npm run build-prod
```

Now, your theme is ready to be deployed. All generated files are located at `out` folder, which you can deploy with any hosting service.


### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions
<p align="left">
  Next js bootstrap template from - <a href="https://creativedesignsguru.com/demo/nextjs-landing-page/">Creative Design Guru</a>
</p>




Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug.

### License

Licensed under the MIT License, Copyright © 2022

See [LICENSE](LICENSE) for more information.

---
