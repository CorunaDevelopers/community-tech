corunadevelopers.github.io

# City Tech Website

Hay que crear obligatoriamente una carpeta custom dentro de static. Podemos incluir la carpeta en el repo con un fichero de ejemplo, e ignorar todo lo demás que haya.

This project is a fork from VigoTech.

## Build Setup

```bash
# install dependencies
$ yarn install
```
# Config the project

You need include all custom into a folder "custom"
Rename .env.example to .env and edit using your own config.
Create a file config.json into static/custom folder and write name city, for example "coruna". 

```
{
  "city": "coruna"
}

```

Create a file into static/custom folder with name city, for example coruna.json with all texts of website, you can write all text of website

```
{
  "coverSection": {
    "title": "CoruñaTech Alliance",
    "description": "Os grupos de tecnoloxía de Coruña xuntámonos para promover a tecnoloxía na cidade",
    "logo": {
      "alt": "CoruñaTech Alliance",
      "main_src": "custom/img/coruna/logo_corunatec_2019.png",
      "inverted_src": "custom/img/coruna/logo_corunatec_2019.png"
    }
  },
  "globals": {
    "email": "corunadevelopers@gmail.com",
    "project_github": "https://github.com/CorunaDevelopers",
    "slack": {
      "url": "https://corunadevelopers.slack.com",
      "img_src": "custom/img/coruna/corunatech_slack.png",
      "invitation": "https://join.slack.com/t/corunadevelopers/shared_invite/enQtMzAxMzU4MzMwMDMyLThkNWYwMzMzODUzMmE0MDE0MGFhZjIxM2U5MzdkYjhlNTM3ZDZhYjliNTk4NWRhYzYwMzI0MjRlZjUyN2JiN2U",
      "code_of_conduct": ""
    },
    "name_community": "CoruñaTech Alliance",
    "twitter": {
      "account": "corunadev"
    },
    "city": "A Coruña",
    "manifest": "",
    "code_of_conduct": "",
    "entry_conditions": "",
    "home_url": "http://corunadevelopers.github.io"
  }
}
```

You also need to create a file members.json in path static/custom/members/{city-name}/members.json fill all groups of your city.
This file has a _schema_ in _static/members-schema.json_, when you run the following command, it validate your members.json and generate into file a members-generated.json
>yarn run prepare-json


# Prepare date to generate website
$ yarn prepare

# Serve with hot reload at localhost:3000
$ yarn run dev

# Generate static project
$ yarn run generate


## Include info about members

Create a file members.json with following information:

```
{
  "name": "CoruñaTech",
  "logo": "./logo.png",
  "sticker": "http://hexb.in/hexagons/vigotech.png",
  "links": {
    "web": "https://corunadevelopers.github.io/",
    "twitter": "https://twitter.com/corunadev",
    "mail": "corunadevelopers@gmail.com",
    "github": "https://twitter.com/corunadev"
  },
  "members": {
    "gpul": {
      "name": "GPUL",
      "logo": "./members/images/gpul.png",
      "links": {
        "web": "https://gpul.org/",
        "twitter": "http://twitter.com/gpul_",
        "mail": "info@gpul.org",
        "meetup": "https://www.meetup.com/es-ES/GPUL-Labs/",
        "github": "https://github.com/gpul-org"
          },
      "events": {
        "type": "meetup",
        "meetupid": "GPUL-Labs"
      }
    }
  }
}

```

# Section _events_ can to have two ways

- Events from api Meetup

```
"events": {
  "type": "meetup",
  "meetupid": "AIndustriosa"
}
```
* Events from Eventbrite
```
"events": {
  "type": "eventbrite",
  "eventbriteid": "17365087639"
}
```
* Events from json

```
"events": {
  "type": "json",
  "source": "https://www.python-vigo.es/events.json"
},
```

With result

```
{
    "title": "Reunión del Grupo el 18/11/2018",
    "date": 1542569580000,
    "url": "https://www.python-vigo.es/posts/reunion-del-grupo-el-20181018/"
}

```
