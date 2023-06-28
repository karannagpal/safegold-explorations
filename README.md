# Safegold website with NextJS & Tailwind

### General commands and config

```bash
# setup project and install node-modules
yarn

# run the project in dev env.
yarn dev

# build project for prod
yarn build
```

### Capacitor config and commands

- everytime changes are made in NextJS project
- also run these when any new capacitor plug-in are added

```bash
# building the nextJS project and generating static build
npm run static
### or using yarn ###
yarn static

# sync all the web code into right places of native platform
npx cap sync
```

- references: https://galaxies.dev/nextjs-and-capacitor
