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

# Capacitor (for cross platform app generation)

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

### Getting GeoLocation

- by default, JavaScript's navigator object can get location info from the browser, 
  - it returns an object with latitude, longitude, accuracy in meters & timestamp
- When we use Capacitor's "@capacitor/geolocation" plugin, it returns object similar to browser's navigation object
- hence the codebase runs just as using original JS object works, 
  - we can remove browser's navigation object (it won't work in android, also throw some errors)
- run the commands to sync android codebase with nextJS one
  - `yarn static && npx cap sync`
- open android studio and run the app in an AVD

### Some troubleshooting tips for above section

- preferrably keep the RAM of device more than 2GB
- "System UI isn't responding" - device problem
  - stop the device, re-run the app
  - try toggling graphics setting of device, between `automatic` and `hardware accelerated`
  - try changing boot option from `Quick boot` to `Cold boot`
- location not updating after updating it for device
