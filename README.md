# Project II: Intelligent Stock Trading

## Description

The application displays stock and currency information. Investors will be advised by famous experts in the field of securities

## Tools

The website is built and developed using ReactJS. Also use some external libraries such as  MUI library can be found [here](https://mui.com/), TradingView library can be found [here](https://in.tradingview.com/widget/), ...


## Run the website locally

### Step 1: Clone project

```sh
git clone https://github.com/hoanganhak53/prj2.git
cd website
```

## Step 2: Load documentation content

The Markdown content for the Harbor [docs](https://goharbor.io/docs) is drawn from the [`docs`](./docs) folder and the `release-X` branches. To pull that content into your local website repo:

```sh
make prepare
```

This copies the `docs` directory and the `release-X` branches into this repo's [`content`](./content) folder, separated by versions, where it can be processed by Hugo.

## Step 3: Install npm dependencies

```sh
npm i
```

## Step 4: Run app in server mode

```sh
npm start
```

This starts up the local Hugo server on http://localhost:3000. As you make changes, the site refreshes automatically in your browser.
